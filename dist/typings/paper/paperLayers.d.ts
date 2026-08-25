import * as React from 'react';
import { Rect, Size, Vector } from './baseGeometry';
export interface PaperTransform {
    readonly width: number;
    readonly height: number;
    readonly originX: number;
    readonly originY: number;
    readonly scale: number;
    readonly paddingX: number;
    readonly paddingY: number;
}
export interface HtmlPaperLayerProps extends React.HTMLProps<HTMLDivElement> {
    paperTransform: PaperTransform;
    layerRef?: React.Ref<HTMLDivElement | null>;
}
export declare function HtmlPaperLayer(props: HtmlPaperLayerProps): React.JSX.Element;
export interface SvgPaperLayerProps extends React.HTMLProps<SVGSVGElement> {
    paperTransform: PaperTransform;
    layerRef?: React.RefObject<SVGSVGElement | null>;
}
export declare function SvgPaperLayer(props: SvgPaperLayerProps): React.JSX.Element;
export declare function emptyPane(pageSize: Size): PaperTransform;
export declare function adjustPane(contentBounds: Rect, paneClientSize: Size, pageSize: Size, scale: number): PaperTransform;
export declare function equalTransforms(a: PaperTransform, b: PaperTransform): boolean;
export declare function totalPaneSize(pt: PaperTransform): Vector;
export declare function paneTopLeft(pt: PaperTransform): Vector;
export declare function paneFromPaperCoords(paper: Vector, pt: PaperTransform): Vector;
export declare function paperFromPaneCoords(pane: Vector, pt: PaperTransform): Vector;
//# sourceMappingURL=paperLayers.d.ts.map