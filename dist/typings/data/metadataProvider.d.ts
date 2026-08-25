import { Translation } from '../coreUtils/i18n';
import type * as Rdf from './rdf/rdfModel';
import type { ElementModel, ElementTypeIri, LinkTypeIri, PropertyTypeIri, LinkModel } from './model';
import type { TemplateState } from './schema';
export interface MetadataProvider {
    getLiteralLanguages(): ReadonlyArray<string>;
    createEntity(type: ElementTypeIri, options: MetadataCreateOptions): Promise<MetadataCreatedEntity>;
    createRelation(source: ElementModel, target: ElementModel, linkType: LinkTypeIri, options: MetadataCreateOptions): Promise<MetadataCreatedRelation>;
    canConnect(source: ElementModel, target: ElementModel | undefined, linkType: LinkTypeIri | undefined, options: {
        readonly signal?: AbortSignal;
    }): Promise<MetadataCanConnect[]>;
    canModifyEntity(entity: ElementModel, options: {
        readonly signal?: AbortSignal;
    }): Promise<MetadataCanModifyEntity>;
    canModifyRelation(link: LinkModel, source: ElementModel, target: ElementModel, options: {
        readonly signal?: AbortSignal;
    }): Promise<MetadataCanModifyRelation>;
    getEntityShape(types: ReadonlyArray<ElementTypeIri>, options: {
        readonly signal?: AbortSignal;
    }): Promise<MetadataEntityShape>;
    getRelationShape(linkType: LinkTypeIri, source: ElementModel, target: ElementModel, options: {
        readonly signal?: AbortSignal;
    }): Promise<MetadataRelationShape>;
    filterConstructibleTypes(types: ReadonlySet<ElementTypeIri>, options: {
        readonly signal?: AbortSignal;
    }): Promise<ReadonlySet<ElementTypeIri>>;
}
export interface MetadataCreateOptions {
    readonly translation: Translation;
    readonly language: string;
    readonly signal?: AbortSignal;
}
export interface MetadataCreatedEntity {
    readonly data: ElementModel;
    readonly elementState?: TemplateState;
}
export interface MetadataCreatedRelation {
    readonly data: LinkModel;
    readonly linkState?: TemplateState;
}
export interface MetadataCanConnect {
    readonly targetTypes: ReadonlySet<ElementTypeIri>;
    readonly inLinks: ReadonlyArray<LinkTypeIri>;
    readonly outLinks: ReadonlyArray<LinkTypeIri>;
}
export interface MetadataCanModifyEntity {
    readonly canChangeIri?: boolean;
    readonly canEdit?: boolean;
    readonly canDelete?: boolean;
}
export interface MetadataCanModifyRelation {
    readonly canChangeType?: boolean;
    readonly canEdit?: boolean;
    readonly canDelete?: boolean;
}
export interface MetadataEntityShape {
    readonly extraProperty?: MetadataPropertyShape;
    readonly properties: ReadonlyMap<PropertyTypeIri, MetadataPropertyShape>;
}
export interface MetadataRelationShape {
    readonly extraProperty?: MetadataPropertyShape;
    readonly properties: ReadonlyMap<PropertyTypeIri, MetadataPropertyShape>;
}
export interface MetadataPropertyShape {
    readonly valueShape: MetadataValueShape;
    readonly minCount?: number;
    readonly maxCount?: number;
    readonly order?: number;
}
export type MetadataValueShape = {
    readonly termType: 'NamedNode';
    readonly defaultValue?: Rdf.NamedNode;
} | {
    readonly termType: 'Literal';
    readonly datatype?: Rdf.NamedNode;
    readonly uniqueLang?: boolean;
    readonly defaultValue?: Rdf.Literal;
};
export declare class BaseMetadataProvider implements MetadataProvider {
    private readonly methods;
    private readonly emptyProperties;
    constructor(methods?: Partial<MetadataProvider>);
    getLiteralLanguages(): ReadonlyArray<string>;
    createEntity(type: ElementTypeIri, options: MetadataCreateOptions): Promise<MetadataCreatedEntity>;
    createRelation(source: ElementModel, target: ElementModel, linkType: LinkTypeIri, options: MetadataCreateOptions): Promise<MetadataCreatedRelation>;
    canConnect(source: ElementModel, target: ElementModel | undefined, linkType: LinkTypeIri | undefined, options: {
        readonly signal?: AbortSignal;
    }): Promise<MetadataCanConnect[]>;
    canModifyEntity(entity: ElementModel, options: {
        readonly signal?: AbortSignal;
    }): Promise<MetadataCanModifyEntity>;
    canModifyRelation(link: LinkModel, source: ElementModel, target: ElementModel, options: {
        readonly signal?: AbortSignal;
    }): Promise<MetadataCanModifyRelation>;
    getEntityShape(types: ReadonlyArray<ElementTypeIri>, options: {
        readonly signal?: AbortSignal;
    }): Promise<MetadataEntityShape>;
    getRelationShape(linkType: LinkTypeIri, source: ElementModel, target: ElementModel, options: {
        readonly signal?: AbortSignal;
    }): Promise<MetadataRelationShape>;
    filterConstructibleTypes(types: ReadonlySet<ElementTypeIri>, options: {
        readonly signal?: AbortSignal;
    }): Promise<ReadonlySet<ElementTypeIri>>;
}
//# sourceMappingURL=metadataProvider.d.ts.map