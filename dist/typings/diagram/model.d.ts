import { EventSource, Events, EventObserver, AnyEvent, PropertyChange } from '../coreUtils/events';
import { Translation } from '../coreUtils/i18n';
import { LinkTypeIri } from '../data/model';
import * as Rdf from '../data/rdf/rdfModel';
import { Element, ElementEvents, Link, LinkEvents, LinkTypeVisibility } from './elements';
import { Graph, CellsChangedEvent } from './graph';
import { CommandHistory } from './history';
export interface DiagramModelEvents {
    changeLanguage: PropertyChange<DiagramModel, string>;
    changeSelection: PropertyChange<DiagramModel, ReadonlyArray<Element | Link>>;
    changeCells: CellsChangedEvent;
    changeCellOrder: {
        readonly source: DiagramModel;
    };
    elementEvent: AnyEvent<ElementEvents>;
    linkEvent: AnyEvent<LinkEvents>;
    changeLinkVisibility: PropertyChange<LinkTypeIri, LinkTypeVisibility>;
    discardGraph: {
        readonly source: DiagramModel;
    };
}
export interface GraphStructure {
    get factory(): Rdf.DataFactory;
    get cellsVersion(): number;
    get elements(): ReadonlyArray<Element>;
    get links(): ReadonlyArray<Link>;
    getElement(elementId: string): Element | undefined;
    getElementLinks(element: Element): ReadonlyArray<Link>;
    getLink(linkId: string): Link | undefined;
    findLink(linkTypeId: LinkTypeIri, sourceId: string, targetId: string): Link | undefined;
    sourceOf(link: Link): Element | undefined;
    targetOf(link: Link): Element | undefined;
    getLinkVisibility(linkTypeId: LinkTypeIri): LinkTypeVisibility;
}
export interface DiagramModelOptions {
    history: CommandHistory;
    translation: Translation;
}
declare const InternalGetGraph: unique symbol;
export declare class DiagramModel implements GraphStructure {
    protected readonly source: EventSource<DiagramModelEvents>;
    readonly events: Events<DiagramModelEvents>;
    private _language;
    private _selection;
    protected graph: Graph;
    protected graphListener: EventObserver;
    readonly history: CommandHistory;
    constructor(options: DiagramModelOptions);
    [InternalGetGraph](): Graph;
    get language(): string;
    setLanguage(value: string): void;
    get selection(): readonly (Element | Link)[];
    setSelection(value: ReadonlyArray<Element | Link>): void;
    get factory(): Rdf.DataFactory;
    get cellsVersion(): number;
    get elements(): ReadonlyArray<Element>;
    get links(): ReadonlyArray<Link>;
    protected getTermFactory(): Rdf.DataFactory;
    getElement(elementId: string): Element | undefined;
    getElementLinks(element: Element): ReadonlyArray<Link>;
    getLink(linkId: string): Link | undefined;
    findLink(linkTypeId: LinkTypeIri, sourceId: string, targetId: string): Link | undefined;
    sourceOf(link: Link): Element | undefined;
    targetOf(link: Link): Element | undefined;
    getLinkVisibility(linkTypeId: LinkTypeIri): LinkTypeVisibility;
    setLinkVisibility(linkTypeId: LinkTypeIri, value: LinkTypeVisibility): void;
    protected resetGraph(): void;
    protected subscribeGraph(): void;
    protected triggerChangeCells(e: CellsChangedEvent): void;
    protected triggerElementEvent(e: AnyEvent<ElementEvents>): void;
    protected triggerLinkEvent(e: AnyEvent<LinkEvents>): void;
    reorderElements(compare: (a: Element, b: Element) => number): void;
    bringElements(targets: ReadonlyArray<Element>, to: 'front' | 'back'): void;
    addElement(element: Element): void;
    removeElement(elementId: string): void;
    addLink(link: Link): void;
    removeLink(linkId: string): void;
}
export {};
//# sourceMappingURL=model.d.ts.map