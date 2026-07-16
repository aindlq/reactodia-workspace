import * as cola from 'webcola';
import type { Rect, Vector } from './geometry';
import type { LayoutGraph, LayoutState } from './layout';
export declare function evaluateColaLayout(graph: LayoutGraph, state: LayoutState, evaluateLayout: (nodes: Map<string, cola.Node>, links: cola.Link<number | cola.Node>[]) => void): LayoutState;
export interface ColaForceLayoutOptions {
    preferredLinkLength: number;
    avoidOverlaps?: boolean;
}
export declare function colaForceLayout(graph: LayoutGraph, state: LayoutState, options?: ColaForceLayoutOptions): LayoutState;
export interface ColaFlowLayoutOptions {
    axis: 'x' | 'y';
    minSeparation?: number;
    preferredLinkLength?: number;
    avoidOverlaps?: boolean;
}
export declare function colaFlowLayout(graph: LayoutGraph, state: LayoutState, options?: ColaFlowLayoutOptions): LayoutState;
export declare function colaRemoveOverlaps(state: LayoutState): LayoutState;
export interface PaddedLayoutState {
    readonly state: LayoutState;
    readonly unwrap: (transformed: LayoutState) => LayoutState;
}
export declare function layoutPadded(state: LayoutState, padding: Vector | undefined): PaddedLayoutState;
export interface PaddedBiasFreeLayoutState {
    readonly state: LayoutState;
    readonly unwrap: (transformed: LayoutState) => LayoutState;
}
export declare function layoutPaddedBiasFree(state: LayoutState, padding: Vector | undefined): PaddedBiasFreeLayoutState;
export interface DefaultLayoutOptions {
    preferredLinkLength?: number;
    padding?: Vector;
}
export declare function blockingDefaultLayout(graph: LayoutGraph, state: LayoutState, options?: DefaultLayoutOptions): Promise<LayoutState>;
export declare function getContentFittingBoxForLayout(state: LayoutState): Rect;
//# sourceMappingURL=layoutShared.d.ts.map