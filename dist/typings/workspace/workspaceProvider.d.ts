import * as React from 'react';
import { type Translation } from '../coreUtils/i18n';
import { MetadataProvider } from '../data/metadataProvider';
import { ValidationProvider } from '../data/validationProvider';
import { TypeStyleResolver, RenameLinkProvider } from '../diagram/customization';
import { Link } from '../diagram/elements';
import { CommandHistory } from '../diagram/history';
import { LayoutFunction } from '../diagram/layout';
import { RenameLinkToLinkStateProvider } from '../diagram/sharedCanvasState';
import { type DialogSettingsProvider } from '../editor/overlayController';
import { WorkspaceContext, WorkspaceEventKey } from './workspaceContext';
export interface CreateWorkspaceParams {
    translation?: Translation;
    history?: CommandHistory;
    typeStyleResolver?: TypeStyleResolver;
    dialogSettingsProvider?: DialogSettingsProvider;
    metadataProvider?: MetadataProvider;
    validationProvider?: ValidationProvider;
    renameLinkProvider?: RenameLinkProvider | null;
    defaultLanguage?: string;
    defaultLayout: LayoutFunction;
    onWorkspaceEvent?: (key: WorkspaceEventKey) => void;
}
export interface TrackedWorkspaceContext extends WorkspaceContext {
    mount(): () => void;
}
export declare function createWorkspace(params: CreateWorkspaceParams): TrackedWorkspaceContext;
export declare function WorkspaceProvider(props: {
    workspace: TrackedWorkspaceContext;
    onMount?: (instance: {
        getContext(): WorkspaceContext;
    } | null) => void;
    children: React.ReactNode;
}): React.JSX.Element;
export interface LoadedWorkspaceParams {
    readonly context: WorkspaceContext;
    readonly signal: AbortSignal;
}
export interface LoadedWorkspace {
    readonly getContext: () => WorkspaceContext;
    readonly onMount: (instance: {
        getContext(): WorkspaceContext;
    } | null) => void;
}
export declare function useLoadedWorkspace(onLoad: (params: LoadedWorkspaceParams) => Promise<void>, deps: unknown[]): LoadedWorkspace;
export declare class DefaultRenameLinkProvider extends RenameLinkToLinkStateProvider {
    canRename(link: Link): boolean;
}
//# sourceMappingURL=workspaceProvider.d.ts.map