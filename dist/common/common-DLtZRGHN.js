import { n as __exportAll, t as __commonJSMin } from "./common-B-1-B7_t.js";
import * as m from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { chainHash, dropHighestNonSignBit, hashString } from "@reactodia/hashmap";
import * as N3 from "n3";
//#region src/coreUtils/collections.ts
function multimapArrayAdd(map, key, value) {
	let values = map.get(key);
	if (!values) {
		values = [];
		map.set(key, values);
	}
	values.push(value);
}
function multimapAdd(map, key, value) {
	let itemSet = map.get(key);
	if (!itemSet) {
		itemSet = /* @__PURE__ */ new Set();
		map.set(key, itemSet);
	}
	itemSet.add(value);
}
function multimapDelete(map, key, value) {
	const itemSet = map.get(key);
	if (itemSet) {
		itemSet.delete(value);
		if (itemSet.size === 0) map.delete(key);
	}
}
/**
* Returns `true` if two arrays has equal elements (compared via `===`)
* and in the same order, otherwise returns `false`.
*
* @category Utilities
*/
function shallowArrayEqual(a, b) {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
	return true;
}
var OrderedMap = class {
	mapping = /* @__PURE__ */ new Map();
	ordered = [];
	reorder(compare) {
		this.ordered.sort(compare);
	}
	get items() {
		return this.ordered;
	}
	get(key) {
		return this.mapping.get(key);
	}
	push(key, value) {
		if (this.mapping.has(key)) {
			const previous = this.mapping.get(key);
			if (previous === value) return;
			const index = this.ordered.indexOf(previous);
			this.ordered.splice(index, 1);
		}
		this.mapping.set(key, value);
		this.ordered.push(value);
	}
	delete(key) {
		if (!this.mapping.has(key)) return;
		const previous = this.mapping.get(key);
		const index = this.ordered.indexOf(previous);
		this.ordered.splice(index, 1);
		this.mapping.delete(key);
		return previous;
	}
};
/**
* Makes a sorting comparator (a function to pass to `Array.sort()`) which
* moves specified subset of items either to the beginning of the array
* or to the end.
*
* @category Utilities
*/
function moveComparator(items, selected, moveDirection) {
	const orderMap = /* @__PURE__ */ new Map();
	const selectionIndexOffset = (moveDirection === "start" ? -1 : 1) * items.length;
	items.forEach((item, index) => {
		orderMap.set(item, index);
	});
	for (const selectedItem of selected) orderMap.set(selectedItem, selectionIndexOffset + orderMap.get(selectedItem));
	return (a, b) => {
		const orderA = orderMap.get(a);
		const orderB = orderMap.get(b);
		return orderA > orderB ? 1 : orderA < orderB ? -1 : 0;
	};
}
//#endregion
//#region builtin:esm-external-require-react
var require_builtin_esm_external_require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = { ...m };
}));
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_builtin_esm_external_require_react();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
		var value = getSnapshot(), _useState = useState({ inst: {
			value,
			getSnapshot
		} }), inst = _useState[0].inst, forceUpdate = _useState[1];
		useLayoutEffect(function() {
			inst.value = value;
			inst.getSnapshot = getSnapshot;
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
		}, [
			subscribe,
			value,
			getSnapshot
		]);
		useEffect(function() {
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			return subscribe(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			});
		}, [subscribe]);
		useDebugValue(value);
		return value;
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
		return getSnapshot();
	}
	var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
	exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
}));
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
/**
* @license React
* use-sync-external-store-shim.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	"production" !== process.env.NODE_ENV && (function() {
		function is(x, y) {
			return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
		}
		function useSyncExternalStore$2(subscribe, getSnapshot) {
			didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var value = getSnapshot();
			if (!didWarnUncachedGetSnapshot) {
				var cachedValue = getSnapshot();
				objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
			}
			cachedValue = useState({ inst: {
				value,
				getSnapshot
			} });
			var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
			useLayoutEffect(function() {
				inst.value = value;
				inst.getSnapshot = getSnapshot;
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			}, [
				subscribe,
				value,
				getSnapshot
			]);
			useEffect(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
				return subscribe(function() {
					checkIfSnapshotChanged(inst) && forceUpdate({ inst });
				});
			}, [subscribe]);
			useDebugValue(value);
			return value;
		}
		function checkIfSnapshotChanged(inst) {
			var latestGetSnapshot = inst.getSnapshot;
			inst = inst.value;
			try {
				var nextValue = latestGetSnapshot();
				return !objectIs(inst, nextValue);
			} catch (error) {
				return !0;
			}
		}
		function useSyncExternalStore$1(subscribe, getSnapshot) {
			return getSnapshot();
		}
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var React = require_builtin_esm_external_require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
		exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
}));
//#endregion
//#region src/coreUtils/hooks.ts
var import_shim = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	if (process.env.NODE_ENV === "production") module.exports = require_use_sync_external_store_shim_production();
	else module.exports = require_use_sync_external_store_shim_development();
})))();
/**
* Subscribes to a value which changes are tracked by the specified event.
*
* @param events an observable object to subscribe with the result store
* @param key event type from the `events` to subscribe with the result store
* @param getSnapshot a function to get a snapshot of an observed property state
* @param deps hook dependency list to re-subscribe to the store on changes
* @category Hooks
* @see {@link useEventStore}
* @see {@link useSyncStore}
*/
function useObservedProperty(events, key, getSnapshot, deps) {
	return useSyncStore(useEventStore(events, key, deps), getSnapshot);
}
var NEVER_SYNC_STORE_DISPOSE = () => {};
var NEVER_SYNC_STORE = () => NEVER_SYNC_STORE_DISPOSE;
/**
* An event store that never triggers any change.
*
* @category Utility
*/
function neverSyncStore() {
	return NEVER_SYNC_STORE;
}
/**
* Creates an event store which changes when an event triggers with the specified event type.
*
* @param events an observable object to subscribe with the result store
* @param key event type from the `events` to subscribe with the result store
* @param deps hook dependency list to re-subscribe to the store on changes
* @category Hooks
*/
function useEventStore(events, key, deps) {
	return m.useCallback((onStoreChange) => {
		if (events) {
			events.on(key, onStoreChange);
			return () => events.off(key, onStoreChange);
		} else return NEVER_SYNC_STORE_DISPOSE;
	}, deps ? [
		events,
		key,
		...deps
	] : [events, key]);
}
/**
* Transforms event store in a way that the result store debounces the changes
* until the next rendered frame via
* [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame).
*
* @category Hooks
*/
function useFrameDebouncedStore(subscribe) {
	return m.useCallback((onChange) => {
		let scheduled;
		const onFrame = () => {
			scheduled = void 0;
			onChange();
		};
		const dispose = subscribe(() => {
			if (scheduled === void 0) scheduled = requestAnimationFrame(onFrame);
		});
		return () => {
			if (scheduled !== void 0) cancelAnimationFrame(scheduled);
			dispose();
		};
	}, [subscribe]);
}
/**
* Same as [React.useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore)
* with a support shim for lower React versions.
*
* @category Hooks
*/
function useSyncStore(subscribe, getSnapshot) {
	return (0, import_shim.useSyncExternalStore)(subscribe, getSnapshot);
}
/**
* Same as [React.useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore)
* with custom equality comparison for snapshot values.
* 
* Update will be skipped unless `equalResults()` called with previous and
* current snapshot returns `false`.
*
* @category Hooks
*/
function useSyncStoreWithComparator(subscribe, getSnapshot, equalResults) {
	const lastSnapshot = m.useRef(void 0);
	return (0, import_shim.useSyncExternalStore)(subscribe, () => {
		const result = getSnapshot();
		if (lastSnapshot.current) {
			const [lastResult] = lastSnapshot.current;
			if (equalResults(lastResult, result)) return lastResult;
		}
		lastSnapshot.current = [result];
		return result;
	});
}
/**
* Asynchronously loads a value by specified `load` function for an `input` dependencies.
*
* Reloads the result when an `input` dependency array changes (shallow equality). 
*
* @category Hooks
*/
function useAsync(params) {
	const { input, load } = params;
	const latestLoad = useLatest(load);
	const [result, setResult] = m.useState({
		data: void 0,
		status: "loading"
	});
	m.useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		const task = latestLoad.current(input, { signal });
		if (task) {
			setResult((previous) => ({
				...previous,
				status: "loading",
				error: void 0
			}));
			task.then((data) => {
				if (!signal.aborted) setResult({
					data,
					status: "completed",
					error: void 0
				});
			}, (error) => {
				if (!signal.aborted) setResult((previous) => ({
					...previous,
					status: "error",
					error
				}));
			});
		} else setResult({
			data: void 0,
			status: "completed",
			error: void 0
		});
		return () => controller.abort();
	}, input);
	return result;
}
function useLatest(value) {
	const ref = m.useRef(value);
	m.useEffect(() => {
		ref.current = value;
	});
	return ref;
}
//#endregion
//#region src/coreUtils/i18n.tsx
var TranslationContext = m.createContext(null);
/**
* Provides i18n (translation) context for the UI elements.
*
* @category Components
* @see {@link useTranslation}
*/
function TranslationProvider(props) {
	const { translation, children } = props;
	return /* @__PURE__ */ jsx(TranslationContext.Provider, {
		value: translation,
		children
	});
}
/**
* Gets current translation data for the UI elements.
*
* @category Hooks
*/
function useTranslation() {
	const translation = m.useContext(TranslationContext);
	if (!translation) throw new Error("Reactodia: missing <TranslationProvider> context");
	return translation;
}
/**
* Represents a lazily-resolved simple or formatted translation string.
*
* @category Core
* @see {@link Translation}
*/
var TranslatedText = class TranslatedText {
	key;
	placeholders;
	constructor(key, placeholders) {
		this.key = key;
		this.placeholders = placeholders;
	}
	/**
	* Constructs a reference to a translation string formatted with the provided
	* placeholders.
	*
	* @see {@link Translation.text}
	*/
	static text(key, placeholders) {
		return new TranslatedText(key, placeholders);
	}
	/**
	* Resolves a translation string referenced by the current instance.
	*/
	resolve(translation) {
		return translation.text(this.key, this.placeholders);
	}
};
//#endregion
//#region src/coreUtils/keyedObserver.ts
/**
* @category Utilities
*/
var KeyedObserver = class {
	subscribe;
	observedKeys = /* @__PURE__ */ new Map();
	constructor(subscribe) {
		this.subscribe = subscribe;
	}
	setSubscribe(subscribe) {
		this.subscribe = subscribe;
	}
	observe(keys) {
		if (keys.length === 0 && this.observedKeys.size === 0) return;
		const newObservedKeys = /* @__PURE__ */ new Map();
		for (const key of keys) {
			if (newObservedKeys.has(key)) continue;
			let unsubscribe = this.observedKeys.get(key);
			if (!unsubscribe) unsubscribe = this.subscribe(key);
			if (unsubscribe) newObservedKeys.set(key, unsubscribe);
		}
		this.observedKeys.forEach((unsubscribe, key) => {
			if (!newObservedKeys.has(key)) unsubscribe();
		});
		this.observedKeys = newObservedKeys;
	}
	stopListening() {
		this.observe([]);
	}
};
/**
* Same as [React.useSyncEventStore](https://react.dev/reference/react/useSyncExternalStore)
* but for {@link KeyedSyncStore} which supports per-key store subscription.
*
* @category Hooks
*/
function useKeyedSyncStore(store, keys, context) {
	const [, setVersion] = m.useState(0);
	const contextRef = m.useRef(void 0);
	let observedContext = contextRef.current;
	if (!observedContext) {
		const forceUpdate = () => setVersion((version) => version + 1);
		observedContext = {
			observer: new KeyedObserver((key) => store(key, context, forceUpdate)),
			forceUpdate,
			lastStore: store
		};
		contextRef.current = observedContext;
	}
	if (observedContext.lastStore !== store) {
		const { observer, forceUpdate } = observedContext;
		observer.setSubscribe((key) => store(key, context, forceUpdate));
		observedContext.lastStore = store;
	}
	observedContext.observer.observe(keys);
	m.useEffect(() => {
		return () => contextRef.current?.observer.stopListening();
	}, []);
}
//#endregion
//#region src/data/rdf/rdfEscape.ts
function escapeRdfValue(value) {
	return ESCAPE_TEST.test(value) ? value.replace(ESCAPE_TARGETS, escapeReplacer) : value;
}
var ESCAPE_TEST = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/;
var ESCAPE_TARGETS = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g;
var ESCAPED_CHARACTERS = {
	"\\": "\\\\",
	"\"": "\\\"",
	"	": "\\t",
	"\n": "\\n",
	"\r": "\\r",
	"\b": "\\b",
	"\f": "\\f"
};
/**
* Replaces a character by its escaped version in string literals for the N3 format.
*/
function escapeReplacer(character) {
	let result = ESCAPED_CHARACTERS[character];
	if (result === void 0) if (character.length === 1) {
		result = character.charCodeAt(0).toString(16);
		result = "\\u0000".substr(0, 6 - result.length) + result;
	} else {
		result = ((character.charCodeAt(0) - 55296) * 1024 + character.charCodeAt(1) + 9216).toString(16);
		result = "\\U00000000".substr(0, 10 - result.length) + result;
	}
	return result;
}
//#endregion
//#region src/data/rdf/rdfModel.ts
var rdfModel_exports = /* @__PURE__ */ __exportAll({
	DefaultDataFactory: () => DefaultDataFactory,
	compareTerms: () => compareTerms,
	equalQuads: () => equalQuads,
	equalTerms: () => equalTerms,
	getLocalName: () => getLocalName,
	hashQuad: () => hashQuad,
	hashTerm: () => hashTerm,
	looksLikeTerm: () => looksLikeTerm,
	termToString: () => termToString
});
var DefaultDataFactory = N3.DataFactory;
function looksLikeTerm(value) {
	if (!(typeof value === "object" && value && "termType" in value && "equals" in value && typeof value.equals === "function")) return false;
	const { termType } = value;
	switch (termType) {
		case "NamedNode":
		case "Literal":
		case "BlankNode":
		case "DefaultGraph":
		case "Variable":
		case "Quad": return true;
		default: return false;
	}
}
function termToString(node) {
	switch (node.termType) {
		case "NamedNode": return `<${escapeRdfValue(node.value)}>`;
		case "BlankNode": return `_:${node.value}`;
		case "Literal": {
			const { value, language, datatype } = node;
			const stringLiteral = `"${escapeRdfValue(value)}"`;
			if (language) return stringLiteral + `@${language}`;
			else if (datatype) return stringLiteral + "^^" + termToString(datatype);
			else return stringLiteral;
		}
		case "DefaultGraph": return "(default graph)";
		case "Variable": return `?${node.value}`;
		case "Quad": {
			let str = "<< ";
			str += termToString(node.subject) + " ";
			str += termToString(node.predicate) + " ";
			str += termToString(node.object) + " ";
			if (node.graph.termType !== "DefaultGraph") str += termToString(node.graph) + " ";
			str += ">>";
			return str;
		}
	}
}
function hashTerm(node) {
	let hash = 0;
	switch (node.termType) {
		case "NamedNode":
		case "BlankNode":
			hash = hashString(node.value);
			break;
		case "Literal":
			hash = hashString(node.value);
			if (node.datatype) hash = chainHash(hash, hashString(node.datatype.value));
			if (node.language) hash = chainHash(hash, hashString(node.language));
			break;
		case "Variable":
			hash = hashString(node.value);
			break;
		case "Quad":
			hash = chainHash(hash, hashTerm(node.subject));
			hash = chainHash(hash, hashTerm(node.predicate));
			hash = chainHash(hash, hashTerm(node.object));
			hash = chainHash(hash, hashTerm(node.graph));
			break;
	}
	return dropHighestNonSignBit(hash);
}
function equalTerms(a, b) {
	if (a.termType !== b.termType) return false;
	switch (a.termType) {
		case "NamedNode":
		case "BlankNode":
		case "Variable":
		case "DefaultGraph": {
			const { value } = b;
			return a.value === value;
		}
		case "Literal": {
			const { value, language, datatype } = b;
			return a.value === value && a.datatype.value === datatype.value && a.language === language;
		}
		case "Quad": {
			const { subject, predicate, object, graph } = b;
			return equalTerms(a.subject, subject) && equalTerms(a.predicate, predicate) && equalTerms(a.object, object) && equalTerms(a.graph, graph);
		}
	}
}
function compareTerms(a, b) {
	if (a.termType !== b.termType) return a.termType < b.termType ? -1 : 1;
	switch (a.termType) {
		case "NamedNode":
		case "BlankNode":
		case "Variable":
			if (a.value !== b.value) return a.value < b.value ? -1 : 1;
			return 0;
		case "Literal": {
			const other = b;
			if (a.value !== other.value) return a.value < other.value ? -1 : 1;
			else if (a.datatype !== other.datatype) return a.datatype < other.datatype ? -1 : 1;
			else if (a.language !== other.language) return a.language < other.language ? -1 : 1;
			return 0;
		}
		case "Quad": {
			const other = b;
			return compareTerms(a.graph, other.graph) || compareTerms(a.subject, other.subject) || compareTerms(a.predicate, other.predicate) || compareTerms(a.object, other.object);
		}
		default: return 0;
	}
}
function hashQuad(quad) {
	return hashTerm(quad);
}
function equalQuads(a, b) {
	return equalTerms(a, b);
}
/**
* Extracts local name for URI the same way as it's done in [RDF4J](https://github.com/eclipse-rdf4j/rdf4j).
*/
function getLocalName(uri) {
	let index = uri.indexOf("#");
	if (index < 0) index = uri.lastIndexOf("/");
	if (index < 0) index = uri.lastIndexOf(":");
	if (index < 0) return;
	return uri.substring(index + 1);
}
//#endregion
//#region src/data/model.ts
/**
* Returns `true` if IRI represents an anonymous entity specific to the data provider;
* otherwise `false`.
*
* The represented entity can only be decoded by a {@link DataProvider} with a support
* for the specific blank node subtype, determined by the IRI prefix, e.g.:
*   - `urn:reactodia:blank:rdf:*` encodes RDF blank nodes from {@link RdfDataProvider};
*   - `urn:reactodia:blank:sparql:*` encodes outer graph content for blank nodes
*     from {@link SparqlDataProvider};
*   - etc.
*
* @category Data
*/
function isEncodedBlank(iri) {
	return iri.startsWith("urn:reactodia:blank:");
}
/**
* Computes a hash code for {@link SubtypeEdge} value.
*
* @category Data
*/
function hashSubtypeEdge(edge) {
	const [from, to] = edge;
	let hash = hashString(from);
	hash = chainHash(hash, hashString(to));
	return dropHighestNonSignBit(hash);
}
/**
* Computes whether {@link SubtypeEdge} values are the same.
*
* @category Data
*/
function equalSubtypeEdges(a, b) {
	const [aFrom, aTo] = a;
	const [bFrom, bTo] = b;
	return aFrom === bFrom && aTo === bTo;
}
/**
* Computes whether {@link LinkKey} values are the same.
*
* @category Data
*/
function equalLinks(left, right) {
	return left.linkTypeId === right.linkTypeId && left.sourceId === right.sourceId && left.targetId === right.targetId;
}
/**
* Computes a hash code for {@link LinkKey} value.
*
* @category Data
*/
function hashLink(link) {
	const { linkTypeId, sourceId, targetId } = link;
	let hash = hashString(linkTypeId);
	hash = chainHash(hash, hashString(sourceId));
	hash = chainHash(hash, hashString(targetId));
	return hash;
}
/**
* Computes whether {@link ElementModel} values are the same, including property values.
*
* @category Data
*/
function equalElements(a, b) {
	return a.id === b.id && shallowArrayEqual(a.types, b.types) && equalProperties(a.properties, b.properties);
}
function equalTermArrays(a, b) {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) if (!equalTerms(a[i], b[i])) return false;
	return true;
}
/**
* Computes whether two property sets are the same, including both keys and values.
*
* @category Data
*/
function equalProperties(a, b) {
	for (const key in a) if (Object.prototype.hasOwnProperty.call(a, key)) {
		if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
		const aValues = a[key];
		const bValues = b[key];
		if (!equalTermArrays(aValues, bValues)) return false;
	}
	for (const key in b) if (Object.prototype.hasOwnProperty.call(b, key)) {
		if (!Object.prototype.hasOwnProperty.call(a, key)) return false;
	}
	return true;
}
//#endregion
//#region src/data/rdf/vocabulary.ts
var NAMESPACE_OWL = "http://www.w3.org/2002/07/owl#";
/**
* Vocabulary for common terms from `owl: <http://www.w3.org/2002/07/owl#>` namespace.
*
* @category Constants
*/
var owl = {
	$namespace: NAMESPACE_OWL,
	Class: `${NAMESPACE_OWL}Class`,
	DatatypeProperty: `${NAMESPACE_OWL}DatatypeProperty`,
	ObjectProperty: `${NAMESPACE_OWL}ObjectProperty`
};
var NAMESPACE_RDF = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
/**
* Vocabulary for common terms from `rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>` namespace.
*
* @category Constants
*/
var rdf = {
	$namespace: NAMESPACE_RDF,
	Property: `${NAMESPACE_RDF}Property`,
	langString: `${NAMESPACE_RDF}langString`,
	type: `${NAMESPACE_RDF}type`,
	JSON: `${NAMESPACE_RDF}JSON`
};
var NAMESPACE_RDFS = "http://www.w3.org/2000/01/rdf-schema#";
/**
* Vocabulary for common terms from `rdfs: <http://www.w3.org/2000/01/rdf-schema#>` namespace.
*
* @category Constants
*/
var rdfs = {
	$namespace: NAMESPACE_RDFS,
	Class: `${NAMESPACE_RDFS}Class`,
	label: `${NAMESPACE_RDFS}label`,
	subClassOf: `${NAMESPACE_RDFS}subClassOf`
};
var NAMESPACE_SCHEMA = "http://schema.org/";
/**
* Vocabulary for common terms from `schema: <http://schema.org/>` namespace.
*
* @category Constants
*/
var schema = {
	$namespace: NAMESPACE_SCHEMA,
	encodingFormat: `${NAMESPACE_SCHEMA}encodingFormat`,
	fileSize: `${NAMESPACE_SCHEMA}fileSize`,
	thumbnailUrl: `${NAMESPACE_SCHEMA}thumbnailUrl`,
	uploadDate: `${NAMESPACE_SCHEMA}uploadDate`
};
var NAMESPACE_XSD = "http://www.w3.org/2001/XMLSchema#";
/**
* Vocabulary for common terms from `xsd: <http://www.w3.org/2001/XMLSchema#>` namespace.
*
* @category Constants
*/
var xsd = {
	$namespace: NAMESPACE_XSD,
	dateTime: `${NAMESPACE_XSD}dateTime`,
	string: `${NAMESPACE_XSD}string`
};
//#endregion
//#region src/diagram/spinner.tsx
var CLASS_NAME = "reactodia-spinner";
/**
* Utility SVG component that displays loading spinner.
*
* @category Components
*/
function Spinner(props) {
	const { position = {
		x: 0,
		y: 0
	}, size = 50, statusText, errorOccurred } = props;
	const textLeftMargin = 5;
	const pathGeometry = "m3.47,-19.7 a20,20 0 1,1 -6.95,0 m0,0 l-6,5 m6,-5 l-8,-0" + (errorOccurred ? "M-8,-8L8,8M-8,8L8,-8" : "");
	return /* @__PURE__ */ jsxs("g", {
		className: CLASS_NAME,
		"data-error": errorOccurred,
		transform: `translate(${position.x},${position.y})`,
		children: [/* @__PURE__ */ jsx("g", {
			className: `${CLASS_NAME}__arrow`,
			children: /* @__PURE__ */ jsx("path", {
				d: pathGeometry,
				transform: `scale(0.02)scale(${size})`,
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "3",
				strokeLinecap: "round"
			})
		}), /* @__PURE__ */ jsx("text", {
			className: `${CLASS_NAME}__text`,
			style: { dominantBaseline: "middle" },
			fill: "currentColor",
			x: size / 2 + textLeftMargin,
			children: statusText
		})]
	});
}
/**
* Same as {@link Spinner} component but for non-SVG context.
*
* @category Components
* @see {@link Spinner}
*/
function HtmlSpinner(props) {
	const { width, height, errorOccurred } = props;
	return /* @__PURE__ */ jsx("svg", {
		width,
		height,
		children: /* @__PURE__ */ jsx(Spinner, {
			size: Math.min(width, height),
			position: {
				x: width / 2,
				y: height / 2
			},
			errorOccurred
		})
	});
}
//#endregion
//#region src/editor/dataLocaleProvider.ts
/**
* Provides a default graph data locale provider implementation.
*
* The default provider uses {@link rdfs.label} and {@link schema.thumbnailUrl}
* properties to get labels and image URLs unless overridden with options.
*/
var DefaultDataLocaleProvider = class {
	model;
	translation;
	labelProperties;
	imageProperties;
	EMPTY_LABELS = [];
	constructor(options) {
		const { model, translation, labelProperties = [rdfs.label], imageProperties = [schema.thumbnailUrl] } = options;
		this.model = model;
		this.translation = translation;
		this.labelProperties = labelProperties;
		this.imageProperties = imageProperties;
	}
	selectEntityLabel(entity) {
		for (const property of this.labelProperties) if (Object.prototype.hasOwnProperty.call(entity.properties, property)) {
			const values = entity.properties[property];
			const literals = values ? filterInLiterals(values) : this.EMPTY_LABELS;
			if (literals.length > 0) return literals;
		}
		return this.EMPTY_LABELS;
	}
	selectEntityImageUrl(entity) {
		for (const property of this.imageProperties) if (Object.prototype.hasOwnProperty.call(entity.properties, property)) {
			const values = entity.properties[property];
			if (values && values.length > 0) return values[0].value;
		}
	}
	/**
	* Formats an IRI (unique identifier) for a graph content item.
	*
	* **By default**:
	*   - usual IRIs are enclosed in `<IRI>`;
	*   - anonymous element IRIs displayed as `(blank node)`.
	*/
	formatIri(iri) {
		if (isEncodedBlank(iri)) return this.translation.text("default_data_locale.iri_blank", { value: iri });
		return this.translation.text("default_data_locale.iri", { value: iri });
	}
	/**
	* Formats a graph entity label.
	*
	* **By default**: uses {@link selectEntityLabel} to get entity labels and
	* {@link Translation.formatLabel} to select one based on the {@link DiagramModel.language}.
	*
	* @param entity entity to format label for
	* @param language target language code
	*/
	formatEntityLabel(entity, language) {
		const labels = this.selectEntityLabel(entity);
		return this.translation.formatLabel(labels, entity.id, language);
	}
	/**
	* Formats a graph entity types into a list.
	*
	* **By default**: returns a sorted comma-separated list of formatted type labels.
	*
	* @param entity entity to format label for
	* @param language target language code
	*/
	formatEntityTypeList(entity, language) {
		const labelList = entity.types.map((iri) => {
			const labels = this.model.getElementType(iri)?.data?.label;
			return this.translation.formatLabel(labels, iri, language);
		});
		labelList.sort();
		return labelList.join(", ");
	}
	/**
	* Provides props for an anchor (`<a>` link) to a resource IRI.
	*
	* **By default**: returns
	* ```
	* {
	*     href: targetIri,
	*     target: '_blank',
	*     rel: 'noreferrer',
	* }
	* ```
	*/
	prepareAnchor(targetIri) {
		return {
			href: targetIri,
			target: "_blank",
			rel: "noreferrer"
		};
	}
	/**
	* Asynchronously resolves an IRI/URL to referenced data asset for display or download,
	* e.g. an image (thumbnail) or a downloadable file.
	*
	* **By default**: returns the asset IRI/URL as-is.
	*/
	resolveAssetUrl(assetIri, options) {
		return Promise.resolve(assetIri);
	}
};
/**
* Helper hook to resolve IRI/URL to referenced data asset with
* {@link DataLocaleProvider.resolveAssetUrl}.
*
* @category Hooks
*/
function useResolvedAssetUrl(locale, assetIri) {
	return useAsync({
		input: [locale, assetIri],
		load: ([locale, assetIri], { signal }) => {
			return assetIri === void 0 ? void 0 : locale.resolveAssetUrl(assetIri, { signal });
		}
	});
}
function filterInLiterals(terms) {
	for (const term of terms) if (term.termType !== "Literal") return terms.filter((t) => t.termType === "Literal");
	return terms;
}
//#endregion
//#region src/editor/observedElement.ts
/**
* Allows to subscribe to the changes to the data of multiple element types
* via {@link useKeyedSyncStore}.
*
* @category Core
*/
var subscribeElementTypes = (key, model, onStoreChange) => {
	const elementType = model.createElementType(key);
	elementType.events.on("changeData", onStoreChange);
	return () => elementType.events.off("changeData", onStoreChange);
};
/**
* Allows to subscribe to the changes to the data of multiple property types
* via {@link useKeyedSyncStore}.
*
* @category Core
*/
var subscribePropertyTypes = (key, model, onStoreChange) => {
	const propertyType = model.createPropertyType(key);
	propertyType.events.on("changeData", onStoreChange);
	return () => propertyType.events.off("changeData", onStoreChange);
};
/**
* Allows to subscribe to the changes to the data of multiple link types
* via {@link useKeyedSyncStore}.
*
* @category Core
*/
var subscribeLinkTypes = (key, model, onStoreChange) => {
	const linkType = model.createLinkType(key);
	linkType.events.on("changeData", onStoreChange);
	return () => linkType.events.off("changeData", onStoreChange);
};
//#endregion
//#region src/workspace/workspaceContext.ts
/**
* Well-known workspace events.
*/
var WorkspaceEventKey = /* @__PURE__ */ function(WorkspaceEventKey) {
	WorkspaceEventKey["searchUpdateCriteria"] = "search:updateCriteria";
	WorkspaceEventKey["searchQueryItem"] = "search:queryItems";
	WorkspaceEventKey["connectionsLoadLinks"] = "connections:loadLinks";
	WorkspaceEventKey["connectionsExpandLink"] = "connections:expandLink";
	WorkspaceEventKey["connectionsLoadElements"] = "connections:loadElements";
	WorkspaceEventKey["editorChangeSelection"] = "editor:changeSelection";
	WorkspaceEventKey["editorToggleDialog"] = "editor:toggleDialog";
	WorkspaceEventKey["editorAddElements"] = "editor:addElements";
	return WorkspaceEventKey;
}({});
/** @hidden */
var WorkspaceContext = m.createContext(null);
/**
* React hook to get current workspace context.
*
* Throws an error if called from component which is outside the workspace.
*
* @category Hooks
*/
function useWorkspace() {
	const context = m.useContext(WorkspaceContext);
	if (!context) throw new Error("Reactodia: missing workspace context");
	return context;
}
//#endregion
export { KeyedObserver as A, useLatest as B, DefaultDataFactory as C, hashQuad as D, getLocalName as E, useTranslation as F, moveComparator as G, useSyncStore as H, neverSyncStore as I, multimapDelete as J, multimapAdd as K, useAsync as L, TranslatedText as M, TranslationContext as N, hashTerm as O, TranslationProvider as P, useEventStore as R, isEncodedBlank as S, equalTerms as T, useSyncStoreWithComparator as U, useObservedProperty as V, OrderedMap as W, shallowArrayEqual as Y, equalLinks as _, subscribeLinkTypes as a, hashLink as b, useResolvedAssetUrl as c, owl as d, rdf as f, equalElements as g, xsd as h, subscribeElementTypes as i, useKeyedSyncStore as j, rdfModel_exports as k, HtmlSpinner as l, schema as m, WorkspaceEventKey as n, subscribePropertyTypes as o, rdfs as p, multimapArrayAdd as q, useWorkspace as r, DefaultDataLocaleProvider as s, WorkspaceContext as t, Spinner as u, equalProperties as v, equalQuads as w, hashSubtypeEdge as x, equalSubtypeEdges as y, useFrameDebouncedStore as z };

//# sourceMappingURL=common-DLtZRGHN.js.map