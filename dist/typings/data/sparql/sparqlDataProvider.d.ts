import * as Rdf from '../rdf/rdfModel';
import { ElementTypeModel, ElementTypeGraph, LinkTypeModel, ElementModel, LinkModel, PropertyTypeModel, ElementIri, ElementTypeIri, LinkTypeIri, PropertyTypeIri } from '../model';
import { DataProvider, DataProviderLinkCount, DataProviderLookupParams, DataProviderLookupItem } from '../dataProvider';
import { SparqlResponse } from './sparqlModels';
import { SparqlDataProviderSettings } from './sparqlDataProviderSettings';
export interface SparqlDataProviderOptions {
    factory?: Rdf.DataFactory;
    endpointUrl: string;
    queryMethod?: 'GET' | 'POST';
    queryFunction?: SparqlQueryFunction;
    chunk?: SparqlProviderChunkOptions | null;
    imagePropertyUris?: ReadonlyArray<string>;
    prepareImages?: (elementInfo: Iterable<ElementModel>, signal: AbortSignal | undefined) => Promise<Map<ElementIri, string>>;
    prepareImagePredicate?: PropertyTypeIri;
    prepareLabels?: (resources: Set<string>, signal: AbortSignal | undefined) => Promise<Map<string, Rdf.Literal[]>>;
    prepareLabelPredicate?: PropertyTypeIri;
}
export type SparqlQueryFunction = (params: {
    url: string;
    body?: string;
    headers: {
        [header: string]: string;
    };
    method: string;
    signal?: AbortSignal;
}) => Promise<Response>;
export interface SparqlProviderChunkOptions {
    readonly maxSize: number;
    readonly unit: 'itemCount' | 'totalLength';
}
export declare class SparqlDataProvider implements DataProvider {
    readonly factory: Rdf.DataFactory;
    private readonly options;
    private readonly settings;
    private readonly queryFunction;
    private readonly acceptBlankNodes;
    private readonly chunkMeasure;
    private linkByPredicate;
    private linkById;
    private openWorldLinks;
    private propertyByPredicate;
    private openWorldProperties;
    private readonly labelPredicate;
    private readonly imagePredicate;
    constructor(options: SparqlDataProviderOptions, settings?: SparqlDataProviderSettings);
    private queryChunked;
    knownElementTypes(params: {
        signal?: AbortSignal;
    }): Promise<ElementTypeGraph>;
    propertyTypes(params: {
        propertyIds: ReadonlyArray<PropertyTypeIri>;
        signal?: AbortSignal;
    }): Promise<Map<PropertyTypeIri, PropertyTypeModel>>;
    elementTypes(params: {
        classIds: ReadonlyArray<ElementTypeIri>;
        signal?: AbortSignal;
    }): Promise<Map<ElementTypeIri, ElementTypeModel>>;
    linkTypes(params: {
        linkTypeIds: ReadonlyArray<LinkTypeIri>;
        signal?: AbortSignal;
    }): Promise<Map<LinkTypeIri, LinkTypeModel>>;
    knownLinkTypes(params: {
        signal?: AbortSignal;
    }): Promise<LinkTypeModel[]>;
    elements(params: {
        elementIds: ReadonlyArray<ElementIri>;
        signal?: AbortSignal;
    }): Promise<Map<ElementIri, ElementModel>>;
    private attachImages;
    links(params: {
        primary: ReadonlyArray<ElementIri>;
        secondary: ReadonlyArray<ElementIri>;
        linkTypeIds?: ReadonlyArray<LinkTypeIri>;
        signal?: AbortSignal;
    }): Promise<LinkModel[]>;
    private queryUndirectedLinks;
    private queryDirectedLinks;
    connectedLinkStats(params: {
        elementId: ElementIri;
        inexactCount?: boolean;
        signal?: AbortSignal;
    }): Promise<DataProviderLinkCount[]>;
    lookup(baseParams: DataProviderLookupParams): Promise<DataProviderLookupItem[]>;
    private createFilterQuery;
    executeSparqlSelect<Binding>(query: string, options?: {
        signal?: AbortSignal;
    }): Promise<SparqlResponse<Binding>>;
    executeSparqlConstruct(query: string, options?: {
        signal?: AbortSignal;
    }): Promise<Rdf.Quad[]>;
    protected createRefQueryPart(params: {
        elementId: ElementIri;
        linkId?: LinkTypeIri;
        direction?: 'in' | 'out';
    }): string;
    private formatLinkUnion;
    private formatLinkLinks;
    private formatLinkPath;
    private formatPropertyInfo;
    private formatPropertyPath;
    private querySingleElementTypes;
    private queryManyElementTypes;
}
//# sourceMappingURL=sparqlDataProvider.d.ts.map