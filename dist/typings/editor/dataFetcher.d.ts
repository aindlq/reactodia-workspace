import { Events } from '../coreUtils/events';
import { LinkModel, ElementIri, ElementTypeIri, LinkTypeIri, PropertyTypeIri } from '../data/model';
import { DataProvider } from '../data/dataProvider';
import { Graph } from '../diagram/graph';
import { ElementType, LinkType, PropertyType } from './dataElements';
import { DataGraph } from './dataGraph';
export interface DataFetcherEvents {
    changeOperations: ChangeOperationsEvent;
}
export interface ChangeOperationsEvent {
    readonly previous: ReadonlyArray<FetchOperation>;
    readonly fail?: FetchOperationFail;
}
export interface FetchOperationFail {
    readonly operation: FetchOperation;
    readonly error: unknown;
}
export type FetchOperation = FetchOperationElement | FetchOperationLink | FetchOperationElementType | FetchOperationLinkType | FetchOperationPropertyType;
export type FetchOperationTargetType = Exclude<FetchOperation['type'], 'link'>;
export interface FetchOperationTypeToTarget {
    'element': ElementIri;
    'elementType': ElementTypeIri;
    'linkType': LinkTypeIri;
    'propertyType': PropertyTypeIri;
}
export interface FetchOperationElement {
    readonly type: 'element';
    readonly targets: ReadonlySet<ElementIri>;
}
export interface FetchOperationLink {
    readonly type: 'link';
}
export interface FetchOperationElementType {
    readonly type: 'elementType';
    readonly targets: ReadonlySet<ElementTypeIri>;
}
export interface FetchOperationLinkType {
    readonly type: 'linkType';
    readonly targets: ReadonlySet<LinkTypeIri>;
}
export interface FetchOperationPropertyType {
    readonly type: 'propertyType';
    readonly targets: ReadonlySet<PropertyTypeIri>;
}
export declare class DataFetcher {
    private graph;
    private dataGraph;
    private dataProvider;
    private readonly source;
    readonly events: Events<DataFetcherEvents>;
    private readonly cancellation;
    private _operations;
    private _failReasons;
    private elementTypeQueue;
    private linkTypeQueue;
    private propertyTypeQueue;
    constructor(graph: Graph, dataGraph: DataGraph, dataProvider: DataProvider);
    get signal(): AbortSignal;
    dispose(): void;
    get operations(): ReadonlyArray<FetchOperation>;
    getFailReason<T extends FetchOperationTargetType>(type: T, target: FetchOperationTypeToTarget[T]): unknown;
    private addOperation;
    private onOperationComplete;
    private ensureFailReasons;
    fetchElementData(targets: ReadonlySet<ElementIri>): Promise<void>;
    private onElementInfoLoaded;
    fetchLinks(primaryIris: ReadonlyArray<ElementIri>, secondaryIris: ReadonlyArray<ElementIri>, linkTypeIris?: ReadonlyArray<LinkTypeIri>): Promise<LinkModel[]>;
    fetchElementType(model: ElementType): void;
    private onElementTypesLoaded;
    fetchLinkType(linkType: LinkType): void;
    private onLinkTypesLoaded;
    fetchPropertyType(propertyType: PropertyType): void;
    private onPropertyTypesLoaded;
}
//# sourceMappingURL=dataFetcher.d.ts.map