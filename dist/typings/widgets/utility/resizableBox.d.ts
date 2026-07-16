import * as React from 'react';
import { Rect, Vector } from '../../diagram/geometry';
export declare function ResizableBox(props: {
    className?: string;
    mapCoordsFromPage: (x: number, y: number) => Vector;
    startResize: () => ResizableBoxOperation;
    minWidth?: number;
    minHeight?: number;
}): React.JSX.Element;
export interface ResizableBoxOperation {
    readonly initialBounds: Rect;
    onResize(bounds: Rect): void;
    end(): void;
}
//# sourceMappingURL=resizableBox.d.ts.map