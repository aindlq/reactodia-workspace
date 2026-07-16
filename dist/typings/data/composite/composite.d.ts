import * as Rdf from '../rdf/rdfModel';
import { DataProvider, DataProviderLinkCount, DataProviderLookupParams, DataProviderLookupItem } from '../dataProvider';
import { ElementTypeModel, ElementTypeGraph, LinkTypeModel, ElementModel, LinkModel, PropertyTypeModel, ElementIri, ElementTypeIri, LinkTypeIri, PropertyTypeIri } from '../model';
import { CompositeResponse } from './mergeUtils';
export interface CompositeDataProviderOptions {
    providers: ReadonlyArray<DataProviderDefinition>;
    originProperty?: PropertyTypeIri;
}
export interface DataProviderDefinition {
    readonly name?: string;
    readonly provider: DataProvider;
    readonly origin?: Rdf.NamedNode | Rdf.Literal | null;
}
export declare class CompositeDataProvider implements DataProvider {
    readonly providers: ReadonlyArray<DataProviderDefinition>;
    private readonly originProperty;
    constructor(options: CompositeDataProviderOptions);
    get factory(): Rdf.DataFactory;
    requestWithMerge<R>(method: (provider: DataProvider) => Promise<R>, merge: (results: Array<CompositeResponse<R>>) => R): Promise<R>;
    knownElementTypes(params: {
        signal?: AbortSignal;
    }): Promise<ElementTypeGraph>;
    knownLinkTypes(params: {
        signal?: AbortSignal;
    }): Promise<LinkTypeModel[]>;
    elementTypes(params: {
        classIds: ReadonlyArray<ElementTypeIri>;
        signal?: AbortSignal;
    }): Promise<Map<ElementTypeIri, ElementTypeModel>>;
    propertyTypes(params: {
        propertyIds: ReadonlyArray<PropertyTypeIri>;
        signal?: AbortSignal;
    }): Promise<Map<PropertyTypeIri, PropertyTypeModel>>;
    linkTypes(params: {
        linkTypeIds: ReadonlyArray<LinkTypeIri>;
        signal?: AbortSignal;
    }): Promise<Map<LinkTypeIri, LinkTypeModel>>;
    elements(params: {
        elementIds: ReadonlyArray<ElementIri>;
        signal?: AbortSignal;
    }): Promise<Map<ElementIri, ElementModel>>;
    links(params: {
        primary: ReadonlyArray<ElementIri>;
        secondary: ReadonlyArray<ElementIri>;
        linkTypeIds?: ReadonlyArray<LinkTypeIri>;
        signal?: AbortSignal;
    }): Promise<LinkModel[]>;
    connectedLinkStats(params: {
        elementId: ElementIri;
        inexactCount?: boolean;
        signal?: AbortSignal;
    }): Promise<DataProviderLinkCount[]>;
    lookup(params: DataProviderLookupParams): Promise<DataProviderLookupItem[]>;
}
//# sourceMappingURL=composite.d.ts.map