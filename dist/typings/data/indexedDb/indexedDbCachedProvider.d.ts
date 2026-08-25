import type * as Rdf from '../rdf/rdfModel';
import { ElementTypeGraph, LinkTypeModel, ElementTypeIri, ElementTypeModel, PropertyTypeIri, PropertyTypeModel, LinkTypeIri, ElementIri, ElementModel, LinkModel } from '../model';
import { DataProvider, DataProviderLinkCount, DataProviderLookupParams, DataProviderLookupItem } from '../dataProvider';
export interface IndexedDbCachedProviderOptions {
    readonly baseProvider: DataProvider;
    readonly dbName: string;
    readonly cacheMissing?: boolean;
    readonly cacheLinks?: boolean;
    readonly cacheTextLookups?: boolean;
    readonly closeSignal: AbortSignal;
}
export declare class IndexedDbCachedProvider implements DataProvider {
    static readonly DB_VERSION = 4;
    private readonly hasher;
    private readonly baseProvider;
    private readonly dbName;
    private readonly cacheMissing;
    private readonly cacheLinks;
    private readonly cacheTextLookups;
    private readonly linkLock;
    private readonly closeSignal;
    private openedDb;
    private deleteRequest;
    constructor(options: IndexedDbCachedProviderOptions);
    get factory(): Rdf.DataFactory;
    clearCache(): Promise<void>;
    private deleteDatabase;
    private openDb;
    private onClose;
    private closeDatabase;
    knownElementTypes(params: {
        signal?: AbortSignal | undefined;
    }): Promise<ElementTypeGraph>;
    knownLinkTypes(params: {
        signal?: AbortSignal | undefined;
    }): Promise<LinkTypeModel[]>;
    elementTypes(params: {
        classIds: readonly ElementTypeIri[];
        signal?: AbortSignal | undefined;
    }): Promise<Map<ElementTypeIri, ElementTypeModel>>;
    propertyTypes(params: {
        propertyIds: readonly PropertyTypeIri[];
        signal?: AbortSignal | undefined;
    }): Promise<Map<PropertyTypeIri, PropertyTypeModel>>;
    linkTypes(params: {
        linkTypeIds: readonly LinkTypeIri[];
        signal?: AbortSignal | undefined;
    }): Promise<Map<LinkTypeIri, LinkTypeModel>>;
    elements(params: {
        elementIds: readonly ElementIri[];
        signal?: AbortSignal | undefined;
    }): Promise<Map<ElementIri, ElementModel>>;
    links(params: {
        primary: ReadonlyArray<ElementIri>;
        secondary: ReadonlyArray<ElementIri>;
        linkTypeIds?: readonly LinkTypeIri[] | undefined;
        signal?: AbortSignal | undefined;
    }): Promise<LinkModel[]>;
    private readLinkRanges;
    private selectMissingLinkBlocks;
    private fetchAndCacheLinks;
    private updateLinkRanges;
    private readLinksFromCache;
    connectedLinkStats(params: {
        elementId: ElementIri;
        inexactCount?: boolean;
        signal?: AbortSignal | undefined;
    }): Promise<DataProviderLinkCount[]>;
    lookup(params: DataProviderLookupParams): Promise<DataProviderLookupItem[]>;
}
//# sourceMappingURL=indexedDbCachedProvider.d.ts.map