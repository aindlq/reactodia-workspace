import { ElementTypeGraph, ElementTypeModel, LinkTypeModel, ElementModel, LinkModel, PropertyTypeModel, ElementIri, ElementTypeIri, LinkTypeIri, PropertyTypeIri } from '../model';
import { DataProvider, DataProviderLinkCount, DataProviderLookupParams, DataProviderLookupItem } from '../dataProvider';
import * as Rdf from './rdfModel';
export interface RdfDataProviderOptions {
    readonly acceptBlankNodes?: boolean;
    readonly factory?: Rdf.DataFactory;
    readonly typePredicate?: string;
    readonly labelPredicate?: string | null;
    readonly imagePredicate?: string | null;
    readonly datatypePredicates?: readonly string[];
    readonly elementTypeBaseTypes?: ReadonlyArray<string>;
    readonly elementSubtypePredicate?: string | null;
    readonly linkTypeBaseTypes?: ReadonlyArray<string>;
}
export declare class RdfDataProvider implements DataProvider {
    readonly factory: Rdf.DataFactory;
    private readonly dataset;
    private readonly acceptBlankNodes;
    private readonly typePredicate;
    private readonly labelPredicate;
    private readonly imagePredicate;
    private readonly datatypePredicates;
    private readonly elementTypeBaseTypes;
    private readonly elementSubtypePredicate;
    private readonly linkTypeBaseTypes;
    private readonly EMPTY_LINKS;
    constructor(options?: RdfDataProviderOptions);
    addGraph(quads: Iterable<Rdf.Quad>): void;
    clear(): void;
    encodeTerm(term: Rdf.NamedNode | Rdf.BlankNode): string;
    decodeTerm(iri: ElementIri | ElementTypeIri | LinkTypeIri | PropertyTypeIri): Rdf.NamedNode | Rdf.BlankNode;
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
    private computeTypeCounts;
    private computeLinkCounts;
}
//# sourceMappingURL=rdfDataProvider.d.ts.map