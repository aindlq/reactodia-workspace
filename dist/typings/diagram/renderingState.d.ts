import * as React from 'react';
import { Events, PropertyChange } from '../coreUtils/events';
import { type SyncStore } from '../coreUtils/hooks';
import { type HotkeyAst } from '../coreUtils/hotkey';
import { ElementTemplate, ElementTemplateResolver, LinkTemplateResolver, LinkTemplate, LinkMarkerStyle, LinkRouter, RoutedLink, RoutedLinks } from './customization';
import { Element, Link } from './elements';
import { Rect, ShapeGeometry, Size, SizeProvider } from './geometry';
import { DiagramModel } from './model';
import { SharedCanvasState } from './sharedCanvasState';
export interface RenderingStateOptions {
    model: DiagramModel;
    shared: SharedCanvasState;
    elementTemplateResolver?: ElementTemplateResolver;
    linkTemplateResolver?: LinkTemplateResolver;
    linkRouter?: LinkRouter;
}
export interface RenderingStateEvents {
    syncUpdate: {
        readonly layer: RenderingLayer;
    };
    changeInteractionBlocked: PropertyChange<RenderingState, boolean>;
    changeLinkTemplates: {
        readonly source: RenderingState;
    };
    changeElementSize: PropertyChange<Element, Size | undefined>;
    changeLinkLabelBounds: PropertyChange<Link, Rect | undefined>;
    changeRoutings: PropertyChange<RenderingState, RoutedLinks>;
}
export declare enum RenderingLayer {
    Element = 1,
    ElementSize = 2,
    LinkRoutes = 3,
    PaperArea = 4,
    Link = 5,
    LinkLabel = 6,
    Overlay = 7
}
export interface RenderingState extends SizeProvider {
    readonly events: Events<RenderingStateEvents>;
    readonly shared: SharedCanvasState;
    get interactionBlocked(): boolean;
    syncUpdate(): void;
    scheduleOnLayerUpdate(layer: RenderingLayer, callback: () => void): void;
    cancelOnLayerUpdate(layer: RenderingLayer, callback: () => void): void;
    getElementSize(element: Element): Size | undefined;
    getLinkLabelBounds(link: Link): Rect | undefined;
    getElementTemplate(element: Element): ElementTemplate;
    getLinkTemplate(link: Link): LinkTemplate;
    getRoutings(): ReadonlyMap<string, RoutedLink>;
    getRouting(linkId: string): RoutedLink | undefined;
}
export declare class MutableRenderingState implements RenderingState {
    private readonly listener;
    private readonly source;
    readonly events: Events<RenderingStateEvents>;
    private readonly scheduledByLayer;
    private readonly layerUpdater;
    private readonly model;
    private readonly resolveElementTemplate;
    private readonly resolveLinkTemplate;
    private readonly mappedTemplates;
    private readonly linkRouter;
    private readonly decorationContainers;
    private readonly elementSizes;
    private readonly linkLabelContainer;
    private readonly linkLabelBounds;
    private cachedLinkTemplates;
    private readonly linkMarkerIndex;
    private static nextLinkMarkerIndex;
    private routings;
    private readonly hotkeyHandlers;
    private _interactionBlocks;
    readonly shared: SharedCanvasState;
    constructor(options: RenderingStateOptions);
    dispose(): void;
    get interactionBlocked(): boolean;
    changeInteractionBlocks(change: 1 | -1): void;
    syncUpdate(): void;
    scheduleOnLayerUpdate(layer: RenderingLayer, callback: () => void): void;
    cancelOnLayerUpdate(layer: RenderingLayer, callback: () => void): void;
    private runLayerUpdate;
    updateLayersUpTo(lastLayer: RenderingLayer): Promise<void>;
    private syncUpdateLayersUpTo;
    ensureDecorationContainer(target: Element | Link): HTMLDivElement;
    getElementSize(element: Element): Size | undefined;
    setElementSize(element: Element, size: Size): void;
    attachLinkLabelContainer(parent: HTMLElement | null): void;
    getLinkLabelContainer(): HTMLElement;
    getLinkLabelBounds(link: Link): Rect | undefined;
    setLinkLabelBounds(link: Link, bounds: Rect | undefined): void;
    getElementTemplate(element: Element): ElementTemplate;
    getElementShape(element: Element): ShapeGeometry;
    ensureLinkMarkerIndex(linkMarker: LinkMarkerStyle): number;
    getLinkTemplate(link: Link): LinkTemplate;
    getRoutings(): ReadonlyMap<string, RoutedLink>;
    getRouting(linkId: string): RoutedLink | undefined;
    private scheduleUpdateRoutings;
    private updateRoutings;
    listenHotkey(ast: HotkeyAst, handler: () => void): () => void;
    triggerHotkey(e: React.KeyboardEvent | KeyboardEvent): void;
}
export declare function useLayerDebouncedStore(subscribe: SyncStore, renderingState: RenderingState, layer?: RenderingLayer): SyncStore;
//# sourceMappingURL=renderingState.d.ts.map