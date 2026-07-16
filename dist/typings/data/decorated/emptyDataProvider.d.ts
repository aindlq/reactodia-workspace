import { ElementTypeGraph, LinkTypeModel, ElementTypeIri, ElementTypeModel, PropertyTypeIri, PropertyTypeModel, LinkTypeIri, ElementIri, ElementModel, LinkModel } from '../model';
import { DataProvider, DataProviderLinkCount, DataProviderLookupParams, DataProviderLookupItem } from '../dataProvider';
import { DataFactory } from '../rdf/rdfModel';
export declare class EmptyDataProvider implements DataProvider {
    get factory(): DataFactory;
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
    connectedLinkStats(params: {
        elementId: ElementIri;
        inexactCount?: boolean | undefined;
        signal?: AbortSignal | undefined;
    }): Promise<DataProviderLinkCount[]>;
    lookup(params: DataProviderLookupParams): Promise<DataProviderLookupItem[]>;
}
//# sourceMappingURL=emptyDataProvider.d.ts.map