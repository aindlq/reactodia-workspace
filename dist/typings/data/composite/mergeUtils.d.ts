import { ElementTypeModel, ElementTypeGraph, LinkTypeModel, ElementModel, LinkModel, PropertyTypeIri, PropertyTypeModel, ElementIri, ElementTypeIri, LinkTypeIri } from '../model';
import type { DataProviderLinkCount, DataProviderLookupItem } from '../dataProvider';
import type { DataProviderDefinition } from './composite';
export type CompositeResponse<T> = readonly [T, DataProviderDefinition];
export declare function mergeKnownElementTypes(composite: CompositeResponse<ElementTypeGraph>[]): ElementTypeGraph;
export declare function mergeKnownLinkTypes(responses: CompositeResponse<LinkTypeModel[]>[]): LinkTypeModel[];
export declare function mergePropertyTypes(responses: CompositeResponse<Map<PropertyTypeIri, PropertyTypeModel>>[]): Map<PropertyTypeIri, PropertyTypeModel>;
export declare function mergeElementTypes(responses: CompositeResponse<Map<ElementTypeIri, ElementTypeModel>>[]): Map<ElementTypeIri, ElementTypeModel>;
export declare function mergeLinkTypes(responses: CompositeResponse<Map<LinkTypeIri, LinkTypeModel>>[]): Map<LinkTypeIri, LinkTypeModel>;
export declare function mergeElementInfo(responses: CompositeResponse<Map<ElementIri, ElementModel>>[], originProperty: PropertyTypeIri): Map<ElementIri, ElementModel>;
export declare function mergeLinksInfo(responses: CompositeResponse<LinkModel[]>[], originProperty: PropertyTypeIri): LinkModel[];
export declare function mergeConnectedLinkStats(responses: CompositeResponse<DataProviderLinkCount[]>[]): DataProviderLinkCount[];
export declare function mergeLookup(responses: CompositeResponse<DataProviderLookupItem[]>[], originProperty: PropertyTypeIri): DataProviderLookupItem[];
//# sourceMappingURL=mergeUtils.d.ts.map