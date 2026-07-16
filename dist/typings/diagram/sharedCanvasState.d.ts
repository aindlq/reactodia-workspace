import { Events, PropertyChange } from '../coreUtils/events';
import type { CanvasApi, CanvasDropEvent } from './canvasApi';
import type { ElementTemplate, LinkTemplate, RenameLinkProvider } from './customization';
import { Element, Link } from './elements';
import type { LayoutFunction } from './layout';
export interface SharedCanvasStateEvents {
    changeHighlight: PropertyChange<SharedCanvasState, CellHighlighter | undefined>;
    findCanvas: FindCanvasEvent;
    dispose: {
        readonly source: SharedCanvasState;
    };
}
export interface FindCanvasEvent {
    readonly canvases: CanvasApi[];
}
export type CellHighlighter = (item: Element | Link) => boolean;
export interface SharedCanvasStateOptions {
    defaultElementResolver: (element: Element) => ElementTemplate;
    defaultLinkResolver: (link: Link) => LinkTemplate;
    defaultLayout: LayoutFunction;
    renameLinkProvider?: RenameLinkProvider;
}
export declare class SharedCanvasState {
    private readonly source;
    readonly events: Events<SharedCanvasStateEvents>;
    private dropOnPaperHandler;
    private _highlighter;
    readonly defaultElementResolver: (element: Element) => ElementTemplate;
    readonly defaultLinkResolver: (link: Link) => LinkTemplate;
    readonly defaultLayout: LayoutFunction;
    readonly renameLinkProvider: RenameLinkProvider | undefined;
    constructor(options: SharedCanvasStateOptions);
    dispose(): void;
    findAllCanvases(): CanvasApi[];
    findAnyCanvas(): CanvasApi | undefined;
    setHandlerForNextDropOnPaper(handler: ((e: CanvasDropEvent) => void) | undefined): void;
    hasHandlerForNextDropOnPaper(): boolean;
    tryHandleDropOnPaper(e: CanvasDropEvent): boolean;
    get highlighter(): CellHighlighter | undefined;
    setHighlighter(value: CellHighlighter | undefined): void;
}
export declare class RenameLinkToLinkStateProvider implements RenameLinkProvider {
    canRename(link: Link): boolean;
    getLabel(link: Link): string | undefined;
    setLabel(link: Link, label: string): void;
}
//# sourceMappingURL=sharedCanvasState.d.ts.map