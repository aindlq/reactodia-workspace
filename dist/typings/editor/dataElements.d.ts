import { type ReadonlyHashSet } from '@reactodia/hashmap';
import { Events, EventSource, PropertyChange } from '../coreUtils/events';
import { ElementIri, ElementModel, ElementTypeIri, ElementTypeModel, LinkKey, LinkModel, LinkTypeIri, LinkTypeModel, PropertyTypeIri, PropertyTypeModel } from '../data/model';
import { TemplateState, type SerializedTemplateState } from '../data/schema';
import { Element, ElementEvents, ElementProps, Link, LinkEvents, LinkProps } from '../diagram/elements';
import { Command } from '../diagram/history';
import { DiagramModel } from '../diagram/model';
import type { SerializedElement, ElementFromJsonOptions, SerializedLink, LinkFromJsonOptions } from './serializedDiagram';
export interface EntityElementEvents extends ElementEvents {
    changeData: PropertyChange<EntityElement, ElementModel>;
}
export interface EntityElementProps extends ElementProps {
    data: ElementModel;
}
export declare class EntityElement extends Element {
    readonly events: Events<EntityElementEvents>;
    private _data;
    constructor(props: EntityElementProps);
    static placeholderData(iri: ElementIri): ElementModel;
    static isPlaceholderData(data: ElementModel): boolean;
    protected get entitySource(): EventSource<EntityElementEvents>;
    get iri(): ElementIri;
    get data(): ElementModel;
    setData(value: ElementModel): void;
    static readonly fromJSONType = "Element";
    static fromJSON(state: SerializedEntityElement, options: ElementFromJsonOptions): EntityElement | undefined;
    toJSON(): SerializedEntityElement;
}
export interface SerializedEntityElement extends SerializedElement {
    '@type': 'Element';
    iri?: ElementIri;
    isExpanded?: boolean;
}
export declare function setEntityElementData(entity: EntityElement, data: ElementModel): Command;
export interface EntityGroupEvents extends ElementEvents {
    changeItems: PropertyChange<EntityGroup, ReadonlyArray<EntityGroupItem>>;
}
export interface EntityGroupProps extends ElementProps {
    items?: ReadonlyArray<EntityGroupItem>;
}
export declare class EntityGroup extends Element {
    readonly events: Events<EntityGroupEvents>;
    private _items;
    private _itemIris;
    constructor(props: EntityGroupProps);
    protected get entitySource(): EventSource<EntityGroupEvents>;
    get items(): ReadonlyArray<EntityGroupItem>;
    setItems(value: ReadonlyArray<EntityGroupItem>): void;
    get itemIris(): ReadonlySet<ElementIri>;
    private updateItemIris;
    static readonly fromJSONType = "ElementGroup";
    static fromJSON(state: SerializedEntityGroup, options: ElementFromJsonOptions): EntityGroup | undefined;
    toJSON(): SerializedEntityGroup;
}
export interface EntityGroupItem {
    readonly data: ElementModel;
    readonly elementState?: TemplateState | undefined;
}
export interface SerializedEntityGroup extends SerializedElement {
    '@type': 'ElementGroup';
    items: ReadonlyArray<SerializedEntityGroupItem>;
}
export interface SerializedEntityGroupItem {
    '@type': 'ElementItem';
    iri: ElementIri;
    elementState?: SerializedTemplateState;
}
export declare function setEntityGroupItems(group: EntityGroup, items: ReadonlyArray<EntityGroupItem>): Command;
export declare function iterateEntitiesOf(element: Element): Iterable<ElementModel>;
export interface RelationLinkEvents extends LinkEvents {
    changeData: PropertyChange<RelationLink, LinkModel>;
}
export interface RelationLinkProps extends LinkProps {
    data: LinkModel;
}
export declare class RelationLink extends Link {
    readonly events: Events<RelationLinkEvents>;
    private _data;
    constructor(props: RelationLinkProps);
    protected get relationSource(): EventSource<RelationLinkEvents>;
    protected getTypeId(): LinkTypeIri;
    get data(): LinkModel;
    setData(value: LinkModel): void;
    withDirection(data: LinkModel): RelationLink;
    static readonly fromJSONType = "Link";
    static fromJSON(state: SerializedRelationLink, options: LinkFromJsonOptions): RelationLink | undefined;
    toJSON(): SerializedRelationLink;
}
export interface SerializedRelationLink extends SerializedLink {
    '@type': 'Link';
    property: LinkTypeIri;
    targetIri?: ElementIri;
    sourceIri?: ElementIri;
}
export declare function setRelationLinkData(relation: RelationLink, data: LinkModel): Command;
export interface RelationGroupEvents extends LinkEvents {
    changeItems: PropertyChange<RelationGroup, ReadonlyArray<RelationGroupItem>>;
}
export interface RelationGroupProps extends LinkProps {
    typeId: LinkTypeIri;
    items: ReadonlyArray<RelationGroupItem>;
}
export declare class RelationGroup extends Link {
    readonly events: Events<RelationGroupEvents>;
    private readonly _typeId;
    private _items;
    private readonly _itemKeys;
    private readonly _sources;
    private readonly _targets;
    constructor(props: RelationGroupProps);
    protected get relationSource(): EventSource<RelationGroupEvents>;
    protected getTypeId(): LinkTypeIri;
    get items(): ReadonlyArray<RelationGroupItem>;
    setItems(value: ReadonlyArray<RelationGroupItem>): void;
    get itemKeys(): ReadonlyHashSet<LinkKey>;
    get itemSources(): ReadonlySet<ElementIri>;
    get itemTargets(): ReadonlySet<ElementIri>;
    private updateItemKeys;
    static readonly fromJSONType = "LinkGroup";
    static fromJSON(state: SerializedRelationGroup, options: LinkFromJsonOptions): RelationGroup | undefined;
    toJSON(): SerializedRelationGroup;
}
export interface RelationGroupItem {
    readonly data: LinkModel;
    readonly linkState?: TemplateState | undefined;
}
export interface SerializedRelationGroup extends SerializedLink {
    '@type': 'LinkGroup';
    property: LinkTypeIri;
    items: ReadonlyArray<SerializedRelationGroupItem>;
}
export interface SerializedRelationGroupItem {
    '@type': 'LinkItem';
    targetIri: ElementIri;
    sourceIri: ElementIri;
    linkState?: SerializedTemplateState;
}
export declare function setRelationGroupItems(group: RelationGroup, items: ReadonlyArray<RelationGroupItem>): Command;
export declare function iterateRelationsOf(link: Link): Iterable<LinkModel>;
export interface ElementTypeEvents {
    changeData: PropertyChange<ElementType, ElementTypeModel | undefined>;
}
export declare class ElementType {
    private readonly source;
    readonly events: Events<ElementTypeEvents>;
    readonly id: ElementTypeIri;
    private _data;
    constructor(props: {
        id: ElementTypeIri;
        data?: ElementTypeModel;
    });
    get data(): ElementTypeModel | undefined;
    setData(value: ElementTypeModel | undefined): void;
}
export interface PropertyTypeEvents {
    changeData: PropertyChange<PropertyType, PropertyTypeModel | undefined>;
}
export declare class PropertyType {
    private readonly source;
    readonly events: Events<PropertyTypeEvents>;
    readonly id: PropertyTypeIri;
    private _data;
    constructor(props: {
        id: PropertyTypeIri;
        data?: PropertyTypeModel;
    });
    get data(): PropertyTypeModel | undefined;
    setData(value: PropertyTypeModel | undefined): void;
}
export interface LinkTypeEvents {
    changeData: PropertyChange<LinkType, LinkTypeModel | undefined>;
}
export declare class LinkType {
    private readonly source;
    readonly events: Events<LinkTypeEvents>;
    readonly id: LinkTypeIri;
    private _data;
    constructor(props: {
        id: LinkTypeIri;
        data?: LinkTypeModel | undefined;
    });
    get data(): LinkTypeModel | undefined;
    setData(value: LinkTypeModel | undefined): void;
}
export declare function changeEntityData(model: DiagramModel, target: ElementIri, data: ElementModel): Command;
export declare function changeRelationData(model: DiagramModel, oldData: LinkModel, newData: LinkModel): Command;
//# sourceMappingURL=dataElements.d.ts.map