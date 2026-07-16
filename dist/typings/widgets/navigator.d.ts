import * as React from 'react';
import { DockDirection } from './utility/viewportDock';
export interface NavigatorProps {
    dock: DockDirection;
    dockOffsetX?: number;
    dockOffsetY?: number;
    expanded?: boolean | 'auto';
    autoCollapseFraction?: number;
    width?: number;
    height?: number;
    scalePadding?: number;
    backgroundFill?: string;
    scrollablePaneFill?: string;
    viewportFill?: string;
    viewportStroke?: NavigatorStrokeStyle;
    overflowStroke?: NavigatorStrokeStyle;
}
export interface NavigatorStrokeStyle {
    readonly color?: string;
    readonly width?: number;
    readonly dash?: ReadonlyArray<number>;
}
export declare function Navigator(props: NavigatorProps): React.JSX.Element;
//# sourceMappingURL=navigator.d.ts.map