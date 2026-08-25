import { HashMap, type ReadonlyHashMap } from '@reactodia/hashmap';
import type { Translation } from '../coreUtils/i18n';
import { ElementIri, LinkKey } from '../data/model';
import { ValidationProvider, ValidatedElement, ValidatedLink, ValidationSeverity } from '../data/validationProvider';
import { AuthoringState } from './authoringState';
import { DataGraphStructure } from './dataDiagramModel';
import { EditorController } from './editorController';
export interface ValidationState {
    readonly elements: ReadonlyMap<ElementIri, ElementValidation>;
    readonly links: ReadonlyHashMap<LinkKey, LinkValidation>;
}
export interface ElementValidation {
    readonly loading: boolean;
    readonly items: ReadonlyArray<ValidatedElement>;
}
export interface LinkValidation {
    readonly loading: boolean;
    readonly items: ReadonlyArray<ValidatedLink>;
}
export declare namespace ValidationState {
    const empty: ValidationState;
    const emptyElement: ElementValidation;
    const emptyLink: LinkValidation;
    function createMutable(): {
        elements: Map<ElementIri, ElementValidation>;
        links: HashMap<LinkKey, LinkValidation>;
    };
    function setElementItems(state: ValidationState, target: ElementIri, items: ReadonlyArray<ValidatedElement>): ValidationState;
    function setLinkItems(state: ValidationState, target: LinkKey, items: ReadonlyArray<ValidatedLink>): ValidationState;
}
export declare function changedElementsToValidate(previousAuthoring: AuthoringState, currentAuthoring: AuthoringState, graph: DataGraphStructure): Set<ElementIri>;
export declare function validateElements(targets: ReadonlySet<ElementIri>, validationProvider: ValidationProvider, graph: DataGraphStructure, editor: EditorController, translation: Translation, language: string, signal: AbortSignal | undefined): void;
export declare function getMaxSeverity(items: ReadonlyArray<{
    readonly severity: ValidationSeverity;
}>): ValidationSeverity;
//# sourceMappingURL=validation.d.ts.map