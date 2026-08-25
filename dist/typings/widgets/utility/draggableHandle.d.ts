import * as React from 'react';
import type { DockDirection } from './viewportDock';
export interface DraggableHandleProps extends React.HTMLAttributes<HTMLDivElement> {
    dock?: DockDirection;
    axis?: 'x' | 'y' | 'all';
    onBeginDragHandle: (e: React.MouseEvent<HTMLDivElement>) => void;
    onDragHandle: (e: MouseEvent, dx: number, dy: number) => void;
    onEndDragHandle?: (e: MouseEvent) => void;
}
export declare function DraggableHandle(props: DraggableHandleProps): React.JSX.Element;
//# sourceMappingURL=draggableHandle.d.ts.map