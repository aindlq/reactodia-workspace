import type { LayoutGraph, LayoutState } from './diagram/layout';
import { DefaultLayoutOptions, ColaForceLayoutOptions, ColaFlowLayoutOptions } from './diagram/layoutShared';
declare class DefaultLayouts {
    defaultLayout: (graph: LayoutGraph, state: LayoutState, options?: DefaultLayoutOptions) => Promise<LayoutState>;
    forceLayout: (graph: LayoutGraph, state: LayoutState, options?: ColaForceLayoutOptions) => Promise<LayoutState>;
    flowLayout: (graph: LayoutGraph, state: LayoutState, options?: ColaFlowLayoutOptions) => Promise<LayoutState>;
    removeOverlaps: (graph: LayoutGraph, state: LayoutState) => Promise<LayoutState>;
}
export type { DefaultLayouts };
//# sourceMappingURL=layout.worker.d.ts.map