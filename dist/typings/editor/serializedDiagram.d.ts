import type { ReadonlyHashMap } from '@reactodia/hashmap';
import { ElementIri, ElementModel, LinkKey, LinkModel, LinkTypeIri } from '../data/model';
import { TemplateState, SerializedTemplateState } from '../data/schema';
import { Element, Link, LinkTypeVisibility } from '../diagram/elements';
import { Vector } from '../diagram/geometry';
export interface SerializedDiagram {
    '@context': any;
    '@type': 'Diagram';
    layoutData: SerializedLayout;
    linkTypeOptions?: ReadonlyArray<SerializedLinkOptions>;
}
export interface SerializedLinkOptions {
    '@type': 'LinkTypeOptions';
    property: LinkTypeIri;
    visible: boolean;
    showLabel?: boolean;
}
export interface SerializedLayout {
    '@type': 'Layout';
    elements: ReadonlyArray<SerializedElement>;
    links: ReadonlyArray<SerializedLink>;
}
type SerializedState<T> = T extends {
    toJSON(): infer S;
} ? Exclude<S, undefined> : never;
type JsonableElement = Element & {
    toJSON(): SerializedElement;
};
export interface SerializableElementCell<T extends JsonableElement = JsonableElement> {
    new (...args: any[]): T;
    readonly fromJSONType: SerializedState<T>['@type'];
    fromJSON(state: SerializedState<T>, options: ElementFromJsonOptions): T | undefined;
}
export interface ElementFromJsonOptions {
    readonly getInitialData: (iri: ElementIri) => ElementModel | undefined;
    readonly mapTemplateState: (from: TemplateState) => TemplateState;
}
export interface SerializedElement {
    '@type': string;
    '@id': string;
    position: Vector;
    elementState?: SerializedTemplateState;
}
type JsonableLink = Link & {
    toJSON(): SerializedLink;
};
export interface SerializableLinkCell<T extends JsonableLink = JsonableLink> {
    new (...args: any[]): T;
    readonly fromJSONType: SerializedState<T>['@type'];
    fromJSON(state: SerializedState<T>, options: LinkFromJsonOptions): T | undefined;
}
export interface LinkFromJsonOptions {
    readonly source: Element;
    readonly target: Element;
    readonly getInitialData: (key: LinkKey) => LinkModel | undefined;
    readonly mapTemplateState: (from: TemplateState) => TemplateState;
}
export interface SerializedLink {
    '@type': string;
    '@id': string;
    source: {
        '@id': string;
    };
    target: {
        '@id': string;
    };
    vertices?: ReadonlyArray<Vector>;
    linkState?: SerializedTemplateState;
}
export declare function emptyDiagram(): SerializedDiagram;
export interface DeserializedDiagram {
    elements: ReadonlyArray<Element>;
    links: ReadonlyArray<Link>;
    linkTypeVisibility: ReadonlyMap<LinkTypeIri, LinkTypeVisibility>;
}
export declare function serializeDiagram(diagram: DeserializedDiagram): SerializedDiagram;
export interface DeserializeDiagramOptions {
    readonly elementCellTypes: readonly SerializableElementCell[];
    readonly linkCellTypes: readonly SerializableLinkCell[];
    readonly preloadedElements?: ReadonlyMap<ElementIri, ElementModel>;
    readonly preloadedLinks?: ReadonlyHashMap<LinkKey, LinkModel>;
    readonly markLinksAsLayoutOnly?: boolean;
}
export declare function deserializeDiagram(diagram: SerializedDiagram, options: DeserializeDiagramOptions): DeserializedDiagram;
export declare function markLayoutOnly(linkState: TemplateState, value: boolean): TemplateState;
export {};
//# sourceMappingURL=serializedDiagram.d.ts.map