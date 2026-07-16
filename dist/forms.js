import { E as getLocalName, F as useTranslation, V as useObservedProperty, c as useResolvedAssetUrl, f as rdf, h as xsd, j as useKeyedSyncStore, l as HtmlSpinner, m as schema, o as subscribePropertyTypes, p as rdfs, r as useWorkspace } from "./common/common-DLtZRGHN.js";
import * as React from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import cx from "clsx";
//#region src/forms/fileUploadProvider.ts
/**
* Default entity type for an {@link UploadedFile uploaded file}.
*
* @category Constants
*/
var FileType = "urn:reactodia:File";
/**
* File upload strategy which stores the file content and metadata in-memory.
*
* @category Core
*/
var MemoryFileUploader = class MemoryFileUploader {
	static IRI_PREFIX = "urn:reactodia:memory-file:";
	factory;
	disposeSignal;
	uploadedFiles = /* @__PURE__ */ new Map();
	objectUrls = /* @__PURE__ */ new WeakMap();
	constructor(options) {
		const { factory, disposeSignal } = options;
		this.factory = factory;
		this.disposeSignal = disposeSignal;
		this.disposeSignal.addEventListener("abort", () => {
			for (const file of this.uploadedFiles.values()) {
				const objectUrl = this.objectUrls.get(file);
				if (objectUrl) URL.revokeObjectURL(objectUrl);
			}
			this.uploadedFiles.clear();
		});
	}
	/**
	* Gets an iterator over all files uploaded via this provider instance.
	*/
	files() {
		return this.uploadedFiles.values();
	}
	getFileMetadata(fileUrl) {
		return this.uploadedFiles.get(fileUrl)?.metadata;
	}
	async uploadFile(file, options = {}) {
		const { signal } = options;
		signal?.throwIfAborted();
		this.disposeSignal.throwIfAborted();
		const name = `${(/* @__PURE__ */ new Date()).toISOString().replaceAll(/[Z\s:-]/g, "")}_${file.name}`;
		const iri = MemoryFileUploader.IRI_PREFIX + name;
		const uploaded = {
			iri,
			name,
			metadata: {
				id: iri,
				types: [FileType],
				properties: {
					[rdfs.label]: [this.factory.literal(file.name)],
					[schema.encodingFormat]: file.type ? [this.factory.literal(file.type)] : [],
					[schema.fileSize]: [this.factory.literal(`${file.size}B`)],
					[schema.uploadDate]: [this.factory.literal((/* @__PURE__ */ new Date()).toISOString(), this.factory.namedNode(xsd.dateTime))]
				}
			},
			blob: file
		};
		this.uploadedFiles.set(uploaded.metadata.id, uploaded);
		return uploaded;
	}
	async resolveFileUrl(fileIri, options) {
		return this.resolveFileUrlSync(fileIri);
	}
	resolveFileUrlSync(fileIri) {
		const file = this.uploadedFiles.get(fileIri);
		if (!file) return;
		let objectUrl = this.objectUrls.get(file);
		if (!objectUrl) {
			objectUrl = URL.createObjectURL(file.blob);
			this.objectUrls.set(file, objectUrl);
		}
		return objectUrl;
	}
};
//#endregion
//#region src/forms/inlineDiagnostic.tsx
var CLASS_NAME$3 = "reactodia-inline-diagnostic";
/**
* Displays an inline diagnostic message in a form.
*
* **Unstable**: this component will likely change in the future.
*
* @category Components
*/
function InlineDiagnostic(props) {
	const { severity, message, error } = props;
	React.useEffect(() => {
		if (error) console.error(`Reactodia: ${message}`, error);
	}, [error]);
	return /* @__PURE__ */ jsxs("div", {
		className: CLASS_NAME$3,
		"data-reactodia-severity": severity,
		children: [/* @__PURE__ */ jsx("span", { className: `${CLASS_NAME$3}__icon` }), /* @__PURE__ */ jsx("span", {
			className: `${CLASS_NAME$3}__message`,
			children: message
		})]
	});
}
//#endregion
//#region src/forms/input/dropZone.tsx
function DropZone(props) {
	const { className, allowDrop, onSelect, children } = props;
	const [dragState, setDragState] = React.useState();
	return /* @__PURE__ */ jsx("div", {
		className,
		"data-reactodia-drop-zone": true,
		"data-reactodia-drag-state": dragState,
		onDragOver: (e) => {
			const items = Array.from(e.dataTransfer.items).filter((item) => item.kind === "file");
			if (items.length > 0) {
				e.preventDefault();
				const accept = items.some((item) => !allowDrop || allowDrop(item));
				e.dataTransfer.dropEffect = accept ? "copy" : "none";
				setDragState(accept ? "accept" : "reject");
			}
		},
		onDragLeave: () => setDragState(void 0),
		onDragEnd: () => setDragState(void 0),
		onDrop: (e) => {
			e.preventDefault();
			const files = Array.from(e.dataTransfer.items).filter((item) => !allowDrop || allowDrop(item)).map((item) => item.getAsFile()).filter((file) => file !== null);
			if (files.length > 0) onSelect(files);
			setDragState(void 0);
		},
		children
	});
}
function isDropZone(node) {
	let current = node;
	while (current) {
		if (current instanceof HTMLElement && current.hasAttribute("data-reactodia-drop-zone")) return true;
		current = current.parentNode;
	}
	return false;
}
function useDisallowDropOutsideZone(topLevel) {
	React.useEffect(() => {
		const handler = (e) => {
			if (e.dataTransfer) {
				if (Array.from(e.dataTransfer.items).filter((item) => item.kind === "file").length > 0) {
					e.preventDefault();
					if (!(e.target instanceof Node && isDropZone(e.target))) e.dataTransfer.dropEffect = "none";
				}
			}
		};
		topLevel.addEventListener("dragover", handler);
		return () => topLevel.removeEventListener("dragover", handler);
	}, [topLevel]);
}
//#endregion
//#region src/forms/input/inputFile.tsx
var CLASS_NAME$2 = "reactodia-property-input-file";
/**
* Form input to upload files and display previously uploaded files.
*
* **Unstable**: this component will likely change in the future.
*
* @category Components
*/
function InputFile(props) {
	const { fileAccept, allowDrop, fileMetadata, uploader, getFileCategory = defaultFileCategory, shape, factory, values, updateValues } = props;
	const t = useTranslation();
	const inputRef = React.useRef(null);
	useDisallowDropOutsideZone(window);
	const [operation, setOperation] = React.useState();
	const onSelect = async (allFiles) => {
		const allowedCount = (shape.maxCount ?? Infinity) - values.length;
		if (allowedCount <= 0) return;
		const files = Number.isFinite(allowedCount) ? allFiles.slice(0, shape.maxCount) : allFiles;
		const controller = new AbortController();
		setOperation(controller);
		let uploaded;
		try {
			uploaded = await Promise.all(files.map((file) => uploader.uploadFile(file, { signal: controller.signal })));
		} finally {
			controller.abort();
			setOperation(void 0);
		}
		const uploadedUrls = uploaded.map((file) => factory.namedNode(file.metadata.id));
		updateValues((previousValues) => {
			return [...previousValues, ...uploadedUrls];
		});
	};
	const onRemove = (value) => {
		updateValues((previous) => previous.filter((v) => !v.equals(value)));
	};
	const displayedProperties = [schema.encodingFormat, schema.fileSize];
	return /* @__PURE__ */ jsxs(DropZone, {
		className: CLASS_NAME$2,
		allowDrop,
		onSelect,
		children: [
			values.map((v, i) => {
				const data = uploader.getFileMetadata(v.value) ?? fileMetadata?.get(v.value);
				return /* @__PURE__ */ jsx(FileItem, {
					iri: v.value,
					data,
					category: getFileCategory(v.value, data),
					displayedProperties,
					onRemove: () => onRemove(v)
				}, i);
			}),
			operation ? /* @__PURE__ */ jsx("div", {
				className: `${CLASS_NAME$2}__spinner`,
				children: /* @__PURE__ */ jsx(HtmlSpinner, {
					width: 50,
					height: 50
				})
			}) : !shape.maxCount || values.length < shape.maxCount ? /* @__PURE__ */ jsxs("div", {
				className: `${CLASS_NAME$2}__placeholder`,
				children: [/* @__PURE__ */ jsx("div", {
					className: `${CLASS_NAME$2}__hint`,
					children: t.text("forms.input_file.drag_hint")
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					className: cx(`${CLASS_NAME$2}__select-file`, "reactodia-btn", "reactodia-btn-default"),
					onClick: () => inputRef.current?.click(),
					children: t.text("forms.input_file.select_files.label")
				})]
			}) : null,
			/* @__PURE__ */ jsx("input", {
				ref: inputRef,
				type: "file",
				className: `${CLASS_NAME$2}__input`,
				accept: fileAccept,
				onChange: (e) => {
					if (e.currentTarget.files && e.currentTarget.files.length > 0) onSelect(Array.from(e.currentTarget.files));
				}
			})
		]
	});
}
function FileItem(props) {
	const { iri, data, category, displayedProperties, onRemove } = props;
	const { model } = useWorkspace();
	const t = useTranslation();
	useKeyedSyncStore(subscribePropertyTypes, displayedProperties.filter((property) => data && Object.hasOwn(data.properties, property)), model);
	const language = useObservedProperty(model.events, "changeLanguage", () => model.language);
	const { data: assetUrl } = useResolvedAssetUrl(model.locale, iri);
	const title = model.locale.formatIri(iri);
	return /* @__PURE__ */ jsxs("div", {
		className: `${CLASS_NAME$2}__item`,
		title,
		children: [
			category === "image" ? /* @__PURE__ */ jsx("img", {
				className: `${CLASS_NAME$2}__item-image`,
				src: assetUrl,
				alt: title
			}) : /* @__PURE__ */ jsx("div", {
				className: `${CLASS_NAME$2}__item-file`,
				role: "none"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: `${CLASS_NAME$2}__item-properties`,
				children: [/* @__PURE__ */ jsx("div", {
					className: `${CLASS_NAME$2}__item-label`,
					children: data ? model.locale.formatEntityLabel(data, model.language) : t.formatLabel([], iri, model.language)
				}), displayedProperties.map((propertyIri) => {
					if (data && Object.hasOwn(data.properties, propertyIri)) {
						const property = model.getPropertyType(propertyIri);
						const values = data.properties[propertyIri];
						return /* @__PURE__ */ jsxs("div", {
							className: `${CLASS_NAME$2}__item-property`,
							children: [
								/* @__PURE__ */ jsx("span", { children: t.formatLabel(property?.data?.label, propertyIri, language) }),
								": ",
								values.length === 0 ? /* @__PURE__ */ jsx("span", { children: "—" }) : null,
								values.map((v) => v.value).join(", ")
							]
						}, propertyIri);
					}
					return null;
				})]
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				className: cx("reactodia-btn", "reactodia-btn-default", `${CLASS_NAME$2}__item-remove`),
				title: t.text("forms.input_file.remove_value.title"),
				onClick: onRemove
			})
		]
	});
}
function defaultFileCategory(url, metadata) {
	if (/.\.(?:jpg|jpeg|png|svg|gif)$/.test(url)) return "image";
	else if (metadata?.properties && Object.hasOwn(metadata.properties, schema.encodingFormat) && metadata.properties[schema.encodingFormat].some((v) => /^image\//.test(v.value))) return "image";
	return "default";
}
//#endregion
//#region src/forms/input/inputList.tsx
var CLASS_NAME$1 = "reactodia-property-input-list";
function InputListInner(props) {
	const { shape, languages, values, updateValues, factory, readonly, placeholder, valueInput: ValueInput } = props;
	const t = useTranslation();
	const { minCount = 0, maxCount = Infinity } = shape;
	const keys = React.useRef([]);
	const nextKey = React.useRef(1);
	while (keys.current.length < values.length) {
		keys.current.push(nextKey.current);
		nextKey.current += 1;
	}
	return /* @__PURE__ */ jsxs(Fragment, { children: [values.map((term, index) => /* @__PURE__ */ jsxs("div", {
		className: `${CLASS_NAME$1}__row`,
		children: [/* @__PURE__ */ jsx(ValueInput, {
			shape,
			languages,
			value: values[index],
			setValue: (nextValue) => {
				updateValues((previous) => {
					if (index >= previous.length || !previous[index].equals(term)) return previous;
					const nextValues = [...previous];
					nextValues[index] = nextValue;
					return nextValues;
				});
			},
			factory,
			readonly,
			placeholder
		}), readonly || values.length <= minCount ? null : /* @__PURE__ */ jsx("button", {
			type: "button",
			className: cx("reactodia-btn", "reactodia-btn-default", `${CLASS_NAME$1}__value-remove`),
			title: t.text("forms.input_list.remove_value.title"),
			onClick: () => updateValues((previous) => {
				if (index >= previous.length || !previous[index].equals(term)) return previous;
				const nextValues = [...previous];
				keys.current.splice(index, 1);
				nextValues.splice(index, 1);
				return nextValues;
			})
		})]
	}, keys.current[index])), readonly || values.length >= maxCount ? null : /* @__PURE__ */ jsx("div", {
		className: `${CLASS_NAME$1}__row`,
		children: /* @__PURE__ */ jsx("button", {
			type: "button",
			className: cx("reactodia-btn", "reactodia-btn-default", `${CLASS_NAME$1}__value-add`),
			title: t.text("forms.input_list.add_value.title"),
			onClick: () => updateValues((previous) => {
				return [...previous, makeDefaultTerm(shape.valueShape, factory)];
			})
		})
	}, "add")] });
}
var InputListMemo = React.memo(InputListInner, (prevProps, nextProps) => prevProps.shape === nextProps.shape && sameLanguages(prevProps.languages, nextProps.languages) && prevProps.values === nextProps.values && prevProps.updateValues === nextProps.updateValues && prevProps.factory === nextProps.factory && prevProps.valueInput === nextProps.valueInput);
/**
* Form input to edit multiple values in a list of specified single value inputs.
*
* **Unstable**: this component will likely change in the future.
*
* @category Components
*/
function InputList(props) {
	return /* @__PURE__ */ jsx(InputListMemo, { ...props });
}
function sameLanguages(a, b) {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
	return true;
}
function makeDefaultTerm(valueShape, factory) {
	switch (valueShape.termType) {
		case "NamedNode": return valueShape.defaultValue ?? factory.namedNode("");
		default: return valueShape.defaultValue ?? factory.literal("", valueShape.datatype);
	}
}
//#endregion
//#region src/forms/input/inputSelect.tsx
/**
* Form input to select a value from a predefined list of variants.
*
* **Unstable**: this component will likely change in the future.
*
* @category Components
*/
function InputSelect(props) {
	const { variants, value, setValue } = props;
	React.useEffect(() => {
		if (value.value === "" && variants.length > 0) {
			if (!variants.find((v) => value.equals(v.value))) setValue(variants[0].value);
		}
	}, [value, variants]);
	return /* @__PURE__ */ jsx("select", {
		className: "reactodia-form-control",
		value: props.value.value,
		onChange: (e) => {
			const nextValue = e.currentTarget.value;
			const variant = variants.find((v) => v.value.value === nextValue);
			if (variant) props.setValue(variant.value);
		},
		children: variants.map(({ value: term, label }) => {
			let variantLabel = label;
			if (!variantLabel && term.termType === "NamedNode") variantLabel = getLocalName(term.value);
			return /* @__PURE__ */ jsx("option", {
				value: term.value,
				children: variantLabel ?? term.value
			}, term.value);
		})
	});
}
//#endregion
//#region src/forms/input/inputText.tsx
var CLASS_NAME = "reactodia-property-input-text";
/**
* Form input to edit a single value as a plain string.
*
* If specified value shape has `rdf:langString` or `xsd:string` datatype,
* a language selector with languages from {@link MetadataProvider.getLiteralLanguages}
* will be displayed as well.
*
* **Unstable**: this component will likely change in the future.
*
* @category Components
*/
function InputText(props) {
	const { shape: { valueShape }, languages, value: term, setValue, factory, readonly, multiline, placeholder } = props;
	const Component = multiline ? "textarea" : "input";
	const hasLanguageSelector = valueShape.termType === "Literal" && (!valueShape.datatype || valueShape.datatype.value === rdf.langString || valueShape.uniqueLang !== void 0);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Component, {
		name: "reactodia-text-property-input",
		className: cx("reactodia-form-control", CLASS_NAME),
		placeholder,
		value: term.value,
		onChange: (e) => {
			const changedValue = e.currentTarget.value;
			setValue(setTermValue(term, changedValue, factory));
		},
		disabled: readonly
	}), hasLanguageSelector ? /* @__PURE__ */ jsx(LanguageSelector, {
		language: term.termType === "Literal" ? term.language : "",
		languages,
		onChangeLanguage: (language) => setValue(setTermLanguage(term, language, factory)),
		disabled: readonly
	}) : null] });
}
function LanguageSelector(props) {
	const { language, languages, onChangeLanguage, disabled } = props;
	if (languages.length === 0 && !language) return null;
	return /* @__PURE__ */ jsxs("select", {
		className: cx("reactodia-form-control", `${CLASS_NAME}__language`),
		value: language,
		onChange: (e) => onChangeLanguage(e.currentTarget.value),
		disabled,
		children: [
			/* @__PURE__ */ jsx("option", {
				value: "",
				children: "—"
			}),
			language && !languages.includes(language) ? /* @__PURE__ */ jsx("option", {
				value: language,
				children: language
			}) : null,
			languages.map((code) => /* @__PURE__ */ jsx("option", {
				value: code,
				children: code
			}, code))
		]
	});
}
function setTermValue(term, value, factory) {
	if (term.termType === "NamedNode") return factory.namedNode(value);
	else if (term.language) return factory.literal(value, term.language);
	else return factory.literal(value, term.datatype);
}
function setTermLanguage(term, language, factory) {
	if (term.termType === "Literal") return factory.literal(term.value, language);
	return term;
}
//#endregion
export { FileType, InlineDiagnostic, InputFile, InputList, InputSelect, InputText, MemoryFileUploader };

//# sourceMappingURL=forms.js.map