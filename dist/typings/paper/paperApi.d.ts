import type { Vector, Rect, Size } from './baseGeometry';
import type { PaperTransform } from './paperLayers';
export interface CanvasMetrics {
    readonly pane: CanvasPaneMetrics;
    readonly area: CanvasPaneMetrics;
    readonly transform: PaperTransform;
    getTransform(): PaperTransform;
    snapshot(): CanvasMetrics;
    getPaperSize(): Size;
    getViewportPageRect(): Rect;
    pageToPaperCoords(pageX: number, pageY: number): Vector;
    paperToPageCoords(paperX: number, paperY: number): Vector;
    clientToPaperCoords(areaClientX: number, areaClientY: number): Vector;
    clientToScrollablePaneCoords(areaClientX: number, areaClientY: number): Vector;
    scrollablePaneToClientCoords(paneX: number, paneY: number): Vector;
    scrollablePaneToPaperCoords(paneX: number, paneY: number): Vector;
    paperToScrollablePaneCoords(paperX: number, paperY: number): Vector;
}
export interface CanvasPaneMetrics {
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    readonly scrollLeft: number;
    readonly scrollTop: number;
}
export interface ViewportOptions {
    animate?: boolean;
    duration?: number;
}
export interface CenterToOptions extends ViewportOptions {
    scale?: number;
}
export interface ScaleOptions extends ViewportOptions {
    pivot?: Vector;
}
//# sourceMappingURL=paperApi.d.ts.map