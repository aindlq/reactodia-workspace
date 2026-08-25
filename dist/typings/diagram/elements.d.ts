import { EventSource, Events, PropertyChange } from '../coreUtils/events';
import { LinkTypeIri } from '../data/model';
import { TemplateState } from '../data/schema';
import { Vector } from './geometry';
export type Cell = Element | Link | LinkVertex;
export interface ElementEvents {
    changePosition: PropertyChange<Element, Vector>;
    changeElementState: PropertyChange<Element, TemplateState>;
    requestedFocus: {
        readonly source: Element;
    };
    requestedRedraw: {
        readonly source: Element;
        readonly level?: ElementRedrawLevel;
    };
}
export type ElementRedrawLevel = 'render' | 'template';
export interface ElementProps {
    id?: string;
    position?: Vector;
    expanded?: boolean;
    elementState?: TemplateState;
}
export declare abstract class Element {
    protected readonly source: EventSource<ElementEvents>;
    readonly events: Events<ElementEvents>;
    readonly id: string;
    private _position;
    private _elementState;
    constructor(props: ElementProps);
    static generateId(): string;
    get position(): Vector;
    setPosition(value: Vector): void;
    get isExpanded(): boolean;
    setExpanded(value: boolean): void;
    get elementState(): TemplateState;
    setElementState(value: TemplateState): void;
    focus(): void;
    redraw(level?: ElementRedrawLevel): void;
}
export declare class VoidElement extends Element {
    constructor(props: Pick<ElementProps, 'id' | 'position'>);
}
export interface LinkEvents {
    changeVertices: PropertyChange<Link, ReadonlyArray<Vector>>;
    changeLinkState: PropertyChange<Link, TemplateState>;
    requestedRedraw: {
        readonly source: Link;
    };
}
export interface LinkProps {
    id?: string;
    sourceId: string;
    targetId: string;
    vertices?: ReadonlyArray<Vector>;
    linkState?: TemplateState;
}
export declare abstract class Link {
    protected readonly source: EventSource<LinkEvents>;
    readonly events: Events<LinkEvents>;
    readonly id: string;
    private _sourceId;
    private _targetId;
    private _vertices;
    private _linkState;
    constructor(props: LinkProps);
    static generateId(): string;
    get sourceId(): string;
    get targetId(): string;
    get typeId(): LinkTypeIri;
    protected abstract getTypeId(): LinkTypeIri;
    get vertices(): ReadonlyArray<Vector>;
    setVertices(value: ReadonlyArray<Vector>): void;
    get linkState(): TemplateState;
    setLinkState(value: TemplateState): void;
    redraw(): void;
}
export type LinkTypeVisibility = 'hidden' | 'visible' | 'withoutLabel';
export declare class LinkVertex {
    readonly link: Link;
    readonly vertexIndex: number;
    constructor(link: Link, vertexIndex: number);
    createAt(location: Vector): void;
    moveTo(location: Vector): void;
    remove(): void;
}
//# sourceMappingURL=elements.d.ts.map