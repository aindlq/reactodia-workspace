import * as React from 'react';
import { ZoomOptions } from './canvasApi';
import type { DiagramModel } from './model';
import { MutableRenderingState } from './renderingState';
export declare function CanvasArea(props: {
    model: DiagramModel;
    renderingState: MutableRenderingState;
    zoomOptions?: ZoomOptions;
    showScrollBars?: boolean;
    watermarkSvg?: string;
    watermarkUrl?: string;
    children: React.ReactNode;
}): React.JSX.Element;
//# sourceMappingURL=canvasArea.d.ts.map