import * as Rdf from './rdf/rdfModel';
export type ElementIri = string & {
    readonly __iriBrand?: 'element';
};
export type ElementTypeIri = string & {
    readonly __iriBrand?: 'elementType';
};
export type LinkTypeIri = string & {
    readonly __iriBrand?: 'linkType';
};
export type PropertyTypeIri = string & {
    readonly __iriBrand?: 'propertyType';
};
export type LinkDirection = 'in' | 'out';
export interface ElementTypeGraph {
    readonly elementTypes: ReadonlyArray<ElementTypeModel>;
    readonly subtypeOf: ReadonlyArray<SubtypeEdge>;
}
export type SubtypeEdge = readonly [derived: ElementTypeIri, base: ElementTypeIri];
export interface ElementModel {
    readonly id: ElementIri;
    readonly types: ReadonlyArray<ElementTypeIri>;
    readonly properties: {
        readonly [id: string]: ReadonlyArray<Rdf.NamedNode | Rdf.Literal>;
    };
}
export interface LinkKey {
    readonly linkTypeId: LinkTypeIri;
    readonly sourceId: ElementIri;
    readonly targetId: ElementIri;
}
export interface LinkModel {
    readonly linkTypeId: LinkTypeIri;
    readonly sourceId: ElementIri;
    readonly targetId: ElementIri;
    readonly properties: {
        readonly [id: string]: ReadonlyArray<Rdf.NamedNode | Rdf.Literal>;
    };
}
export interface ElementTypeModel {
    readonly id: ElementTypeIri;
    readonly label: ReadonlyArray<Rdf.Literal>;
    readonly count?: number;
}
export interface LinkTypeModel {
    readonly id: LinkTypeIri;
    readonly label: ReadonlyArray<Rdf.Literal>;
    readonly count?: number;
}
export interface PropertyTypeModel {
    readonly id: PropertyTypeIri;
    readonly label: ReadonlyArray<Rdf.Literal>;
}
export declare function isEncodedBlank(iri: string): boolean;
export declare function hashSubtypeEdge(edge: SubtypeEdge): number;
export declare function equalSubtypeEdges(a: SubtypeEdge, b: SubtypeEdge): boolean;
export declare function equalLinks(left: LinkKey, right: LinkKey): boolean;
export declare function hashLink(link: LinkKey): number;
export declare function equalElements(a: ElementModel, b: ElementModel): boolean;
export declare function equalProperties(a: {
    readonly [id: string]: ReadonlyArray<Rdf.NamedNode | Rdf.Literal>;
}, b: {
    readonly [id: string]: ReadonlyArray<Rdf.NamedNode | Rdf.Literal>;
}): boolean;
//# sourceMappingURL=model.d.ts.map