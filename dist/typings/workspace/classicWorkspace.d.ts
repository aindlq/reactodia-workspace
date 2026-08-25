import * as React from 'react';
import { type ClassTreeProps } from '../widgets/classTree';
import { type InstancesSearchProps } from '../widgets/instancesSearch';
import { type LinkTypesToolboxProps } from '../widgets/linksToolbox';
import { type ToolbarProps } from '../widgets/toolbar';
import { WorkspaceLanguage } from '../widgets/toolbarAction';
import type { BaseDefaultWorkspaceProps } from './defaultWorkspace';
import { type WorkspaceLayoutContainerProps } from './workspaceLayout';
export interface ClassicWorkspaceProps extends BaseDefaultWorkspaceProps {
    leftColumn?: Omit<WorkspaceLayoutContainerProps, 'children'> | null;
    rightColumn?: Omit<WorkspaceLayoutContainerProps, 'children'> | null;
    toolbar?: Partial<ClassicToolbarProps> | null;
    classTree?: ClassTreeProps;
    instancesSearch?: Omit<InstancesSearchProps, 'commands'>;
    linkToolbox?: LinkTypesToolboxProps;
}
export declare function ClassicWorkspace(props: ClassicWorkspaceProps): React.JSX.Element;
export interface ClassicToolbarProps extends Pick<ToolbarProps, 'dock' | 'dockOffsetX' | 'dockOffsetY'> {
    menu?: React.ReactNode | null;
    children?: React.ReactNode | null;
    languages?: ReadonlyArray<WorkspaceLanguage>;
}
export declare function ClassicToolbar(props: ClassicToolbarProps): React.JSX.Element;
//# sourceMappingURL=classicWorkspace.d.ts.map