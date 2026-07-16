import * as React from 'react';
import type { HotkeyString } from '../coreUtils/hotkey';
import { ExportRasterOptions } from '../diagram/canvasApi';
export interface ToolbarActionStyleProps {
    className?: string;
    title?: string;
    disabled?: boolean;
    hotkey?: HotkeyString | null;
}
export interface ToolbarActionProps extends ToolbarActionStyleProps {
    onSelect?: () => void;
    children?: React.ReactNode;
}
export declare function ToolbarAction(props: ToolbarActionProps): React.JSX.Element;
export interface ToolbarActionOpenProps extends ToolbarActionStyleProps {
    fileAccept?: string;
    onSelect: (file: File) => void;
    children?: React.ReactNode;
}
export declare function ToolbarActionOpen(props: ToolbarActionOpenProps): React.JSX.Element;
export interface ToolbarActionSaveProps extends Omit<ToolbarActionStyleProps, 'disabled'> {
    mode?: 'layout' | 'authoring' | 'any';
    onSelect: () => void;
    children?: React.ReactNode;
}
export declare function ToolbarActionSave(props: ToolbarActionSaveProps): React.JSX.Element;
export interface ToolbarActionClearAllProps extends ToolbarActionStyleProps {
}
export declare function ToolbarActionClearAll(props: ToolbarActionClearAllProps): React.JSX.Element;
export interface ToolbarActionExportProps extends ToolbarActionStyleProps {
    kind: 'exportRaster' | 'exportSvg' | 'print';
    fileName?: string;
    rasterOptions?: ExportRasterOptions;
    children?: React.ReactNode;
}
export declare function ToolbarActionExport(props: ToolbarActionExportProps): React.JSX.Element | null;
export interface ToolbarActionUndoProps extends Omit<ToolbarActionStyleProps, 'disabled'> {
    hotkey?: HotkeyString | null;
}
export declare function ToolbarActionUndo(props: ToolbarActionUndoProps): React.JSX.Element;
export interface ToolbarActionRedoProps extends Omit<ToolbarActionStyleProps, 'disabled'> {
    hotkey?: HotkeyString | null;
}
export declare function ToolbarActionRedo(props: ToolbarActionRedoProps): React.JSX.Element;
export interface ToolbarActionLayoutProps extends Omit<ToolbarActionStyleProps, 'disabled'> {
}
export declare function ToolbarActionLayout(props: ToolbarActionLayoutProps): React.JSX.Element;
export interface ToolbarLanguageSelectorProps extends Pick<ToolbarActionStyleProps, 'className' | 'title'> {
    languages: ReadonlyArray<WorkspaceLanguage>;
}
export interface WorkspaceLanguage {
    readonly code: string;
    readonly label: string;
}
export declare function ToolbarLanguageSelector(props: ToolbarLanguageSelectorProps): React.JSX.Element | null;
//# sourceMappingURL=toolbarAction.d.ts.map