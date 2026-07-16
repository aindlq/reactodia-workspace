import * as React from 'react';
import { DockDirection } from './utility/viewportDock';
export interface ToolbarProps {
    dock: DockDirection;
    dockOffsetX?: number;
    dockOffsetY?: number;
    menu?: React.ReactNode;
    children: React.ReactNode;
}
export declare function Toolbar(props: ToolbarProps): React.JSX.Element;
//# sourceMappingURL=toolbar.d.ts.map