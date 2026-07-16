import * as React from 'react';
import { type AnnotationSupportProps } from '../widgets/annotation';
import { type CanvasProps } from '../widgets/canvas';
import { type ConnectionsMenuProps } from '../widgets/connectionsMenu';
import { type DropOnCanvasProps } from '../widgets/dropOnCanvas';
import { type HaloProps } from '../widgets/halo';
import { type HaloLinkProps } from '../widgets/haloLink';
import { type NavigatorProps } from '../widgets/navigator';
import { type SelectionProps } from '../widgets/selection';
import { type ToolbarProps } from '../widgets/toolbar';
import { WorkspaceLanguage } from '../widgets/toolbarAction';
import { type UnifiedSearchProps } from '../widgets/unifiedSearch';
import { type VisualAuthoringProps } from '../widgets/visualAuthoring';
import { type ZoomControlProps } from '../widgets/zoomControl';
export interface BaseDefaultWorkspaceProps {
    className?: string;
    style?: React.CSSProperties;
    colorScheme?: 'auto' | 'light' | 'dark';
    canvas?: CanvasProps;
    canvasWidgets?: ReadonlyArray<React.ReactElement>;
    annotations?: Partial<AnnotationSupportProps> | null;
    connectionsMenu?: Omit<ConnectionsMenuProps, 'commands'> | null;
    dropOnCanvas?: DropOnCanvasProps | null;
    halo?: HaloProps | null;
    haloLink?: HaloLinkProps | null;
    selection?: SelectionProps | null;
    navigator?: Partial<NavigatorProps> | null;
    visualAuthoring?: VisualAuthoringProps;
    zoomControl?: Partial<ZoomControlProps> | null;
    children?: React.ReactNode;
}
export interface DefaultWorkspaceProps extends BaseDefaultWorkspaceProps {
    menu?: React.ReactNode | null;
    search?: Partial<UnifiedSearchProps> | null;
    actions?: React.ReactNode | null;
    mainToolbar?: Pick<ToolbarProps, 'dock' | 'dockOffsetX' | 'dockOffsetY'>;
    actionsToolbar?: Pick<ToolbarProps, 'dock' | 'dockOffsetX' | 'dockOffsetY'>;
    languages?: ReadonlyArray<WorkspaceLanguage>;
}
export declare function DefaultWorkspace(props: DefaultWorkspaceProps): React.JSX.Element;
//# sourceMappingURL=defaultWorkspace.d.ts.map