import * as React from 'react';
interface CommonWorkspaceLayoutProps {
    className?: string;
    style?: React.CSSProperties;
    defaultSize?: number;
    defaultCollapsed?: boolean;
    collapsedSize?: number;
    minSize?: number;
    undocked?: boolean;
}
export interface WorkspaceLayoutContainerProps extends CommonWorkspaceLayoutProps {
    id?: string;
    animationDuration?: number;
    children: WorkspaceChild | ReadonlyArray<WorkspaceChild>;
}
type WorkspaceChild = React.ReactElement<WorkspaceLayoutContainerProps | WorkspaceLayoutItemProps> | null;
export declare function WorkspaceLayoutRow(props: WorkspaceLayoutContainerProps): React.JSX.Element;
export declare function WorkspaceLayoutColumn(props: WorkspaceLayoutContainerProps): React.JSX.Element;
export interface WorkspaceLayoutItemProps extends CommonWorkspaceLayoutProps {
    id: string;
    'aria-label'?: string;
    heading?: React.ReactNode;
    children: React.ReactElement;
}
export declare function WorkspaceLayoutItem(props: WorkspaceLayoutItemProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export interface WorkspaceLayoutResizeContext {
    onStartResize?: (direction: 'vertical' | 'horizontal') => void;
    onResize?: (direction: 'vertical' | 'horizontal') => void;
}
export declare const WorkspaceLayoutResizeContext: React.Context<WorkspaceLayoutResizeContext | null>;
export {};
//# sourceMappingURL=workspaceLayout.d.ts.map