import type * as Rdf from './rdf/rdfModel';
import { ElementTypeGraph, ElementTypeModel, LinkTypeModel, ElementModel, LinkModel, PropertyTypeModel, ElementIri, ElementTypeIri, LinkTypeIri, PropertyTypeIri } from './model';
export interface DataProvider {
    readonly factory: Rdf.DataFactory;
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
export interface DataProviderLinkCount {
    readonly id: LinkTypeIri;
    readonly inCount: number;
    readonly outCount: number;
    readonly inexact?: boolean;
}
export interface DataProviderLookupParams {
    elementTypeId?: ElementTypeIri;
    text?: string;
    refElementId?: ElementIri;
    refElementLinkId?: LinkTypeIri;
    linkDirection?: 'in' | 'out';
    limit?: number | null;
    signal?: AbortSignal;
}
export interface DataProviderLookupItem {
    readonly element: ElementModel;
    readonly inLinks: ReadonlySet<LinkTypeIri>;
    readonly outLinks: ReadonlySet<LinkTypeIri>;
}
//# sourceMappingURL=dataProvider.d.ts.map