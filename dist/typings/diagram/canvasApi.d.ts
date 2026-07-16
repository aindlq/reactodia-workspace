import * as React from 'react';
import { Events, PropertyChange } from '../coreUtils/events';
import type { CanvasMetrics, CanvasPaneMetrics, CenterToOptions, ScaleOptions, ViewportOptions } from '../paper/paperApi';
import type { PaperTransform } from '../paper/paperLayers';
import type { ToDataURLOptions } from '../paper/toSvg';
import type { RenderingState } from './renderingState';
import type { Cell } from './elements';
import type { Vector, Rect } from './geometry';
import type { DiagramModel } from './model';
export type { CanvasMetrics, CanvasPaneMetrics, CenterToOptions, ScaleOptions, ViewportOptions };
export interface CanvasApi {
    readonly events: Events<CanvasEvents>;
    readonly renderingState: RenderingState;
    readonly metrics: CanvasMetrics;
    readonly zoomOptions: Required<ZoomOptions>;
    readonly pointerMode: CanvasPointerMode;
    setPointerMode(value: CanvasPointerMode): void;
    focus(): void;
    centerTo(paperPosition?: Vector, options?: CenterToOptions): Promise<void>;
    centerContent(options?: ViewportOptions): Promise<void>;
    getScale(): number;
    setScale(value: number, options?: ScaleOptions): Promise<void>;
    zoomBy(value: number, options?: ScaleOptions): Promise<void>;
    zoomIn(scaleOptions?: ScaleOptions): Promise<void>;
    zoomOut(scaleOptions?: ScaleOptions): Promise<void>;
    zoomToFit(options?: ViewportOptions): Promise<void>;
    zoomToFitRect(paperRect: Rect, options?: ViewportOptions): Promise<void>;
    exportSvg(options?: ExportSvgOptions): Promise<string>;
    exportRaster(options?: ExportRasterOptions): Promise<string>;
    isAnimatingGraph(): boolean;
    animateGraph(setupChanges: () => void, duration?: number): Promise<void>;
}
export interface CanvasEvents {
    pointerDown: CanvasPointerEvent;
    pointerMove: CanvasPointerEvent;
    pointerUp: CanvasPointerUpEvent;
    scroll: CanvasScrollEvent;
    dragover: CanvasDragoverEvent;
    drop: CanvasDropEvent;
    contextMenu: CanvasContextMenuEvent;
    resize: CanvasResizeEvent;
    keydown: CanvasKeyboardEvent;
    keyup: CanvasKeyboardEvent;
    changeAnimatingGraph: PropertyChange<CanvasApi, boolean>;
    changePointerMode: PropertyChange<CanvasApi, CanvasPointerMode>;
    changeScale: PropertyChange<CanvasApi, number>;
    changeTransform: PropertyChange<CanvasApi, PaperTransform>;
}
export interface CanvasPointerEvent {
    readonly source: CanvasApi;
    readonly sourceEvent: React.MouseEvent<Element> | MouseEvent;
    readonly target: Cell | undefined;
    readonly panning: boolean;
}
export interface CanvasPointerUpEvent extends CanvasPointerEvent {
    readonly triggerAsClick: boolean;
}
export interface CanvasScrollEvent {
    readonly source: CanvasApi;
    readonly sourceEvent: Event;
}
export interface CanvasDragoverEvent {
    readonly source: CanvasApi;
    readonly sourceEvent: DragEvent;
    readonly position: Vector;
    readonly allowDrop: () => void;
}
export interface CanvasDropEvent {
    readonly source: CanvasApi;
    readonly sourceEvent: DragEvent;
    readonly position: Vector;
}
export interface CanvasContextMenuEvent {
    readonly source: CanvasApi;
    readonly sourceEvent: React.MouseEvent;
    readonly target: Cell | undefined;
}
export interface CanvasResizeEvent {
    readonly source: CanvasApi;
}
export interface CanvasKeyboardEvent {
    readonly source: CanvasApi;
    readonly sourceEvent: React.KeyboardEvent;
}
export type CanvasPointerMode = 'panning' | 'selection';
export interface ZoomOptions {
    min?: number;
    max?: number;
    maxFit?: number;
    step?: number;
    fitPadding?: number;
    requireCtrl?: boolean;
}
export interface ExportSvgOptions {
    contentPadding?: Vector;
    removeByCssSelectors?: ReadonlyArray<string>;
    addXmlHeader?: boolean;
}
export interface ExportRasterOptions extends ExportSvgOptions, ToDataURLOptions {
}
export interface CanvasContext {
    readonly canvas: CanvasApi;
    readonly model: DiagramModel;
}
export declare const CanvasContext: React.Context<CanvasContext | null>;
export declare function useCanvas(): CanvasContext;
//# sourceMappingURL=canvasApi.d.ts.map