import type { ReadonlyHashMap } from '@reactodia/hashmap';
import { AnyEvent, Events } from '../coreUtils/events';
import { ElementIri, ElementModel, ElementTypeIri, LinkKey, LinkModel, LinkTypeIri, PropertyTypeIri } from '../data/model';
import { DataProvider } from '../data/dataProvider';
import * as Rdf from '../data/rdf/rdfModel';
import { Command } from '../diagram/history';
import { DiagramModel, DiagramModelEvents, DiagramModelOptions, GraphStructure } from '../diagram/model';
import { EntityElement, EntityGroup, RelationLink, RelationGroup, ElementType, ElementTypeEvents, PropertyType, PropertyTypeEvents, LinkType, LinkTypeEvents } from './dataElements';
import { ChangeOperationsEvent, FetchOperation, FetchOperationTargetType, FetchOperationTypeToTarget } from './dataFetcher';
import { type DataLocaleProvider } from './dataLocaleProvider';
import { SerializedDiagram, SerializableElementCell, SerializableLinkCell } from './serializedDiagram';
export interface DataDiagramModelEvents extends DiagramModelEvents {
    elementTypeEvent: AnyEvent<ElementTypeEvents>;
    linkTypeEvent: AnyEvent<LinkTypeEvents>;
    propertyTypeEvent: AnyEvent<PropertyTypeEvents>;
    loadingStart: {
        readonly source: DataDiagramModel;
    };
    loadingSuccess: {
        readonly source: DataDiagramModel;
    };
    loadingError: {
        readonly source: DataDiagramModel;
        readonly error: unknown;
    };
    changeOperations: ChangeOperationsEvent;
    createLoadedLink: {
        readonly source: DataDiagramModel;
        readonly model: LinkModel;
        cancel(): void;
    };
}
export interface DataGraphStructure extends GraphStructure {
    getElementType(elementTypeIri: ElementTypeIri): ElementType | undefined;
    getLinkType(linkTypeIri: LinkTypeIri): LinkType | undefined;
    getPropertyType(propertyTypeIri: PropertyTypeIri): PropertyType | undefined;
}
export interface DataDiagramModelOptions extends DiagramModelOptions {
}
export declare class DataDiagramModel extends DiagramModel implements DataGraphStructure {
    readonly events: Events<DataDiagramModelEvents>;
    private readonly translation;
    private dataGraph;
    private loadingScope;
    private _dataProvider;
    private _locale;
    private fetcher;
    private discardingTask;
    constructor(options: DataDiagramModelOptions);
    private get extendedSource();
    get dataProvider(): DataProvider;
    protected getTermFactory(): Rdf.DataFactory;
    get locale(): DataLocaleProvider;
    get operations(): ReadonlyArray<FetchOperation>;
    getOperationFailReason<T extends FetchOperationTargetType>(type: T, target: FetchOperationTypeToTarget[T]): unknown;
    protected resetGraph(): void;
    protected subscribeGraph(): void;
    private setDataProvider;
    createNewDiagram(params: {
        dataProvider: DataProvider;
        locale?: DataLocaleProvider;
        signal?: AbortSignal;
    }): Promise<void>;
    importLayout(params: {
        dataProvider: DataProvider;
        locale?: DataLocaleProvider;
        diagram?: SerializedDiagram;
        elementCellTypes?: readonly SerializableElementCell[];
        linkCellTypes?: readonly SerializableLinkCell[];
        preloadedElements?: ReadonlyMap<ElementIri, ElementModel>;
        preloadedLinks?: ReadonlyHashMap<LinkKey, LinkModel>;
        validateLinks?: boolean;
        hideUnusedLinkTypes?: boolean;
        signal?: AbortSignal;
    }): Promise<void>;
    discardLayout(): void;
    exportLayout(): SerializedDiagram;
    private initLinkTypes;
    private setLinkSettings;
    private createGraphElements;
    private hideUnusedLinkTypes;
    requestData(): Promise<void>;
    requestElementData(elementIris: ReadonlyArray<ElementIri>): Promise<void>;
    requestLinks(options?: RequestLinksOptions): Promise<void>;
    requestLinksOfType(linkTypeIds?: ReadonlyArray<LinkTypeIri>): Promise<void>;
    createElement(elementIriOrModel: ElementIri | ElementModel): EntityElement;
    private onLinkInfoLoaded;
    createLinks(data: LinkModel): Array<RelationLink | RelationGroup>;
    private createRelation;
    getElementType(elementTypeIri: ElementTypeIri): ElementType | undefined;
    createElementType(elementTypeIri: ElementTypeIri): ElementType;
    getLinkType(linkTypeIri: LinkTypeIri): LinkType | undefined;
    createLinkType(linkTypeIri: LinkTypeIri): LinkType;
    getPropertyType(propertyTypeIri: PropertyTypeIri): PropertyType | undefined;
    createPropertyType(propertyIri: PropertyTypeIri): PropertyType;
    group(entities: ReadonlyArray<EntityElement>): EntityGroup;
    ungroupAll(groups: ReadonlyArray<EntityGroup>): EntityElement[];
    ungroupSome(group: EntityGroup, entities: ReadonlySet<ElementIri>): EntityElement[];
    regroupLinks(links: ReadonlyArray<RelationLink | RelationGroup>): void;
    private recreateLinks;
}
export interface RequestLinksOptions {
    addedElements?: ReadonlyArray<ElementIri>;
    linkTypes?: ReadonlyArray<LinkTypeIri>;
}
export declare function requestElementData(model: DataDiagramModel, elementIris: ReadonlyArray<ElementIri>): Command;
export declare function restoreLinksBetweenElements(model: DataDiagramModel, options?: RequestLinksOptions): Command;
export declare function getAllPresentEntities(graph: DataGraphStructure): Set<ElementIri>;
//# sourceMappingURL=dataDiagramModel.d.ts.map