import { Events, AnyEvent, PropertyChange } from '../coreUtils/events';
import { LinkTypeIri } from '../data/model';
import { Element, ElementEvents, Link, LinkEvents, LinkTypeVisibility } from './elements';
export interface GraphEvents {
    changeCells: CellsChangedEvent;
    elementEvent: AnyEvent<ElementEvents>;
    linkEvent: AnyEvent<LinkEvents>;
    changeLinkVisibility: PropertyChange<LinkTypeIri, LinkTypeVisibility>;
}
export interface CellsChangedEvent {
    readonly updateAll: boolean;
    readonly changedElement?: Element;
    readonly changedLinks?: ReadonlyArray<Link>;
}
export declare class Graph {
    private readonly source;
    readonly events: Events<GraphEvents>;
    private cellsVersion;
    private readonly elements;
    private readonly links;
    private readonly elementLinks;
    private readonly EMPTY_LINKS;
    private readonly linkTypeVisibility;
    getCellsVersion(): number;
    getElements(): readonly Element[];
    getLinks(): readonly Link[];
    getLink(linkId: string): Link | undefined;
    getElementLinks(element: Element): ReadonlyArray<Link>;
    iterateLinks(sourceId: string, targetId: string, linkTypeId?: LinkTypeIri): Iterable<Link>;
    sourceOf(link: Link): Element | undefined;
    targetOf(link: Link): Element | undefined;
    reorderElements(compare: (a: Element, b: Element) => number): void;
    getElement(elementId: string): Element | undefined;
    addElement(element: Element): void;
    private onElementEvent;
    removeElement(elementId: string): void;
    addLink(link: Link): void;
    private onLinkEvent;
    removeLink(linkId: string, options?: {
        silent?: boolean;
    }): void;
    private removeLinkReferences;
    private incrementCellsVersion;
    get linkVisibility(): ReadonlyMap<LinkTypeIri, LinkTypeVisibility>;
    getLinkVisibility(linkTypeId: LinkTypeIri): LinkTypeVisibility;
    setLinkVisibility(linkTypeId: LinkTypeIri, value: LinkTypeVisibility): void;
}
//# sourceMappingURL=graph.d.ts.map