import * as React from 'react';
export type DockDirection = 'nw' | 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w';
export interface ViewportDockProps {
    className?: string;
    dock: DockDirection;
    dockOffsetX?: number;
    dockOffsetY?: number;
    children: React.ReactElement<{
        className?: string;
    }>;
}
export declare function ViewportDock(props: ViewportDockProps): React.JSX.Element;
export type DockAlignment = 'start' | 'center' | 'end';
export declare function getParentDockAlignment(target: Element): [x: DockAlignment | undefined, y: DockAlignment | undefined];
export declare function getParentDockMargin(target: Element): number | undefined;
//# sourceMappingURL=viewportDock.d.ts.map