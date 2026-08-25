import type { Size } from '../diagram/geometry';
import type { ElementTypeIri, LinkTypeIri, PropertyTypeIri } from './model';
export declare const DiagramContextV1 = "https://ontodia.org/context/v1.json";
export declare const PlaceholderDataProperty: PropertyTypeIri;
export declare const PlaceholderEntityType: ElementTypeIri;
export declare const PlaceholderRelationType: LinkTypeIri;
export type TemplateProperty<K extends string = string, V = unknown> = K & {
    __value: V;
};
export declare class TemplateState {
    private readonly value;
    static empty: TemplateState;
    constructor(value: {
        [property: string]: unknown;
    } | undefined);
    static property<K extends string>(key: K): {
        of<V>(): TemplateProperty<K, V>;
    };
    get<V>(property: TemplateProperty<string, V>): V | undefined;
    set<V>(property: TemplateProperty<string, V>, value: V): TemplateState;
    static fromJSON(value: {
        readonly [property: string]: unknown;
    } | undefined): TemplateState;
    toJSON(): SerializedTemplateState | undefined;
}
export type SerializedTemplateState = {
    readonly [property: string]: unknown;
};
export declare namespace TemplateProperties {
    const Expanded: TemplateProperty<"urn:reactodia:expanded", boolean>;
    const ElementSize: TemplateProperty<"urn:reactodia:elementSize", Size>;
    const PinnedProperties: TemplateProperty<"urn:reactodia:pinnedProperties", PinnedProperties>;
    const CustomLabel: TemplateProperty<"urn:reactodia:customLabel", string>;
    const LayoutOnly: TemplateProperty<"urn:reactodia:layoutOnly", boolean>;
    const GroupPageIndex: TemplateProperty<"urn:reactodia:groupPageIndex", number>;
    const GroupPageSize: TemplateProperty<"urn:reactodia:groupPageSize", number>;
    const AnnotationContent: TemplateProperty<"urn:reactodia:annotationContent", AnnotationContent>;
    const ColorVariant: TemplateProperty<"urn:reactodia:colorVariant", ColorVariant>;
}
export interface PinnedProperties {
    readonly [propertyId: string]: boolean;
}
export interface AnnotationContent {
    readonly type: 'plaintext';
    readonly text: string;
    readonly style?: AnnotationTextStyle;
}
export type AnnotationTextStyle = Pick<React.CSSProperties, 'fontStyle' | 'fontWeight' | 'textDecorationLine' | 'textAlign'>;
export type ColorVariant = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
export declare const DefaultColorVariants: readonly ColorVariant[];
//# sourceMappingURL=schema.d.ts.map