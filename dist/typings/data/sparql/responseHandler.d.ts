import * as Rdf from '../rdf/rdfModel';
import { LinkTypeModel, ElementTypeGraph, ElementModel, LinkModel, ElementIri, ElementTypeIri, LinkTypeIri, PropertyTypeIri } from '../model';
import type { DataProviderLinkCount, DataProviderLookupItem } from '../dataProvider';
import { LinkConfiguration, PropertyConfiguration } from './sparqlDataProviderSettings';
import { SparqlResponse, ClassBinding, ElementBinding, LinkBinding, ElementImageBinding, LinkCountBinding, LinkTypeBinding, ConnectedLinkTypeBinding, PropertyBinding, ElementTypeBinding, FilterBinding } from './sparqlModels';
export interface MutableClassModel {
    readonly id: ElementTypeIri;
    label: Rdf.Literal[];
    count?: number;
}
export declare function getClassTree(response: SparqlResponse<ClassBinding>): ElementTypeGraph;
export declare function collectClassInfo(response: SparqlResponse<ClassBinding>, result: Map<ElementTypeIri, MutableClassModel>): void;
export interface MutablePropertyModel {
    readonly id: PropertyTypeIri;
    label: Rdf.Literal[];
}
export declare function collectPropertyInfo(response: SparqlResponse<PropertyBinding>, result: Map<PropertyTypeIri, MutablePropertyModel>): void;
export interface MutableLinkType {
    readonly id: LinkTypeIri;
    label: Rdf.Literal[];
    count?: number;
}
export declare function collectLinkTypes(response: SparqlResponse<LinkTypeBinding>, result: Map<LinkTypeIri, MutableLinkType>): void;
export declare function getLinkTypes(response: SparqlResponse<LinkTypeBinding>): Map<LinkTypeIri, LinkTypeModel>;
export declare function triplesToElementBinding(triples: ReadonlyArray<Rdf.Quad>): SparqlResponse<ElementBinding>;
export declare function getElementsInfo(response: SparqlResponse<ElementBinding>, types: ReadonlyMap<ElementIri, ReadonlySet<ElementTypeIri>> | undefined, propertyByPredicate: ReadonlyMap<string, readonly PropertyConfiguration[]> | undefined, labelPredicate: PropertyTypeIri, openWorldProperties: boolean): Map<ElementIri, ElementModel>;
export declare function enrichElementsWithImages(response: SparqlResponse<ElementImageBinding>, elements: Map<ElementIri, ElementModel>, imagePropertyIri: PropertyTypeIri): void;
export declare function collectElementTypes(response: SparqlResponse<ElementTypeBinding>, result: Map<ElementIri, Set<ElementTypeIri>>): void;
export declare function getLinksInfo(bindings: ReadonlyArray<LinkBinding>, types?: ReadonlyMap<ElementIri, ReadonlySet<ElementTypeIri>>, linkByPredicateType?: ReadonlyMap<string, readonly LinkConfiguration[]>, openWorldLinks?: boolean): LinkModel[];
export interface ConnectedLinkType {
    linkType: LinkTypeIri;
    hasInLink?: boolean;
    hasOutLink?: boolean;
}
export declare function getConnectedLinkTypes(response: SparqlResponse<ConnectedLinkTypeBinding>, linkByPredicateType?: ReadonlyMap<string, readonly LinkConfiguration[]>, openWorldLinks?: boolean): ConnectedLinkType[];
export declare function getLinkStatistics(response: SparqlResponse<LinkCountBinding>): DataProviderLinkCount | undefined;
export declare function getFilteredData(response: SparqlResponse<ElementBinding & FilterBinding>, sourceTypes: ReadonlySet<ElementTypeIri> | undefined, linkByPredicateType: ReadonlyMap<string, readonly LinkConfiguration[]> | undefined, labelPredicate: PropertyTypeIri, openWorldLinks: boolean): DataProviderLookupItem[];
export declare function isDirectLink(link: LinkConfiguration): boolean;
export declare function isDirectProperty(property: PropertyConfiguration): boolean;
export declare function appendProperty(properties: {
    [id: string]: Array<Rdf.NamedNode | Rdf.Literal>;
}, propType: PropertyTypeIri, propValue: Rdf.NamedNode | Rdf.Literal): void;
//# sourceMappingURL=responseHandler.d.ts.map