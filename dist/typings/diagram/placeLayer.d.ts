import * as React from 'react';
export interface CanvasPlaceLayerContext {
    readonly containers: Record<CanvasPlaceAtLayer, HTMLElement>;
}
export declare const CanvasPlaceLayerContext: React.Context<CanvasPlaceLayerContext | "nested" | null>;
export declare function createPlaceLayerContext(): CanvasPlaceLayerContext;
export interface CanvasPlaceLayerProps extends React.HTMLProps<HTMLDivElement> {
    context: CanvasPlaceLayerContext;
    layer: CanvasPlaceAtLayer;
}
export declare function CanvasPlaceLayer(props: CanvasPlaceLayerProps): React.JSX.Element;
export declare function isCanvasPlaceLayer(element: Element): boolean;
export type CanvasPlaceAtLayer = 'underlay' | 'overLinkGeometry' | 'overLinks' | 'overElements';
export declare function CanvasPlaceAt(props: {
    layer: CanvasPlaceAtLayer;
    children: React.ReactNode;
}): React.ReactPortal;
//# sourceMappingURL=placeLayer.d.ts.map