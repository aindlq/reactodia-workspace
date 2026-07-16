import type * as Rdf from '../rdf/rdfModel';
import { DataProvider, DataProviderLinkCount, DataProviderLookupParams, DataProviderLookupItem } from '../dataProvider';
import { ElementTypeModel, ElementTypeGraph, LinkTypeModel, ElementModel, LinkModel, ElementIri, ElementTypeIri, LinkTypeIri, PropertyTypeIri, PropertyTypeModel } from '../model';
export interface DecoratedDataProviderOptions {
    readonly baseProvider: DataProvider;
    readonly decorator: DataProviderDecorator;
}
export type DecoratedMethodName = 'knownElementTypes' | 'knownLinkTypes' | 'elementTypes' | 'propertyTypes' | 'linkTypes' | 'elements' | 'links' | 'connectedLinkStats' | 'lookup';
export type DataProviderDecorator = <P extends {
    signal?: AbortSignal;
}, R>(method: DecoratedMethodName, params: P, body: (params: P) => Promise<R>) => Promise<R>;
export declare class DecoratedDataProvider implements DataProvider {
    private readonly baseProvider;
    private readonly decorator;
    constructor(options: DecoratedDataProviderOptions);
    get factory(): Rdf.DataFactory;
    private decorate;
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
export declare function delayProviderDecorator(meanDelay: number, distribution: 'constant' | 'linear' | 'exponential'): <P extends {
    signal?: AbortSignal;
}, R>(method: DecoratedMethodName, params: P, body: (params: P) => Promise<R>) => Promise<R>;
//# sourceMappingURL=decoratedDataProvider.d.ts.map