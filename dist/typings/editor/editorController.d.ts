import { Events, PropertyChange } from '../coreUtils/events';
import { type Translation } from '../coreUtils/i18n';
import { MetadataProvider } from '../data/metadataProvider';
import { ValidationProvider } from '../data/validationProvider';
import { ElementModel, LinkModel, ElementIri } from '../data/model';
import { Element, Link } from '../diagram/elements';
import { AuthoringState, AuthoringEvent, TemporaryState } from './authoringState';
import { DataDiagramModel } from './dataDiagramModel';
import { EntityElement, RelationLink } from './dataElements';
import { ValidationState } from './validation';
export interface EditorProps {
    readonly model: DataDiagramModel;
    readonly translation: Translation;
    readonly getDisposeSignal: () => AbortSignal;
    readonly metadataProvider?: MetadataProvider;
    readonly validationProvider?: ValidationProvider;
}
export interface EditorEvents {
    changeMode: PropertyChange<EditorController, boolean>;
    changeAuthoringState: PropertyChange<EditorController, AuthoringState>;
    changeValidationState: PropertyChange<EditorController, ValidationState>;
    changeTemporaryState: PropertyChange<EditorController, TemporaryState>;
}
export declare class EditorController {
    private readonly source;
    readonly events: Events<EditorEvents>;
    private readonly model;
    private readonly translation;
    private readonly getDisposeSignal;
    private _inAuthoringMode;
    private _metadataProvider;
    private _validationProvider;
    private _authoringState;
    private _validationState;
    private _temporaryState;
    constructor(props: EditorProps);
    get inAuthoringMode(): boolean;
    setAuthoringMode(value: boolean): void;
    get metadataProvider(): MetadataProvider | undefined;
    get validationProvider(): ValidationProvider | undefined;
    get authoringState(): AuthoringState;
    setAuthoringState(value: AuthoringState): void;
    private updateAuthoringState;
    get validationState(): ValidationState;
    setValidationState(value: ValidationState): void;
    get temporaryState(): TemporaryState;
    setTemporaryState(value: TemporaryState): void;
    private validateChangedFrom;
    private validateChangedCells;
    revalidateEntities(entities: ReadonlySet<ElementIri>): void;
    removeSelectedElements(): void;
    removeItems(items: ReadonlyArray<Element | Link>): void;
    createEntity(data: ElementModel, options?: {
        temporary?: boolean;
    }): EntityElement;
    changeEntity(target: ElementIri | ElementModel, newData: ElementModel): void;
    deleteEntity(target: ElementIri | ElementModel): void;
    createRelation(base: RelationLink, options?: {
        temporary?: boolean;
    }): RelationLink;
    changeRelation(oldData: LinkModel, newData: LinkModel): void;
    moveRelationSource(params: {
        link: RelationLink;
        newSource: EntityElement;
    }): RelationLink;
    moveRelationTarget(params: {
        link: RelationLink;
        newTarget: EntityElement;
    }): RelationLink;
    deleteRelation(data: LinkModel): void;
    removeAllTemporaryCells(): void;
    removeTemporaryCells(cells: ReadonlyArray<Element | Link>): void;
    discardChange(event: AuthoringEvent): void;
    private discardItemFromGroup;
    private removeRelationsFromLinks;
    applyAuthoringChanges(): void;
}
//# sourceMappingURL=editorController.d.ts.map