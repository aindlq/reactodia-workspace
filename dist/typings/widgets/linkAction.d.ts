import * as React from 'react';
import type { HotkeyString } from '../coreUtils/hotkey';
import { Link } from '../diagram/elements';
export interface LinkActionContext {
    readonly link: Link;
    readonly buttonSize: number;
    readonly getPosition: (side: 'source' | 'target', index: number) => Pick<React.CSSProperties, 'top' | 'left'>;
    readonly getAngleInDegrees: (side: 'source' | 'target') => number;
}
export declare const LinkActionProvidedContext: React.Context<LinkActionContext | null>;
export declare function useLinkActionContext(): LinkActionContext;
export interface LinkActionStyleProps {
    dockSide: 'source' | 'target';
    dockIndex: number;
    className?: string;
    title?: string;
    hotkey?: HotkeyString | null;
}
export interface LinkActionProps extends LinkActionStyleProps {
    disabled?: boolean;
    onSelect?: () => void;
    onMouseDown?: (e: React.MouseEvent) => void;
    onPointerDown?: (e: React.PointerEvent) => void;
    children?: React.ReactNode;
}
export declare function LinkAction(props: LinkActionProps): React.JSX.Element;
export interface LinkActionSpinnerProps extends LinkActionStyleProps {
}
export declare function LinkActionSpinner(props: LinkActionStyleProps): React.JSX.Element;
export interface LinkActionEditProps extends LinkActionStyleProps {
}
export declare function LinkActionEdit(props: LinkActionEditProps): React.JSX.Element | null;
export interface LinkActionDeleteProps extends LinkActionStyleProps {
    hotkey?: HotkeyString | null;
}
export declare function LinkActionDelete(props: LinkActionDeleteProps): React.JSX.Element | null;
export interface LinkActionMoveEndpointProps extends Omit<LinkActionStyleProps, 'dockIndex'> {
}
export declare function LinkActionMoveEndpoint(props: LinkActionMoveEndpointProps): React.JSX.Element | null;
export interface LinkActionRenameProps extends Pick<LinkActionStyleProps, 'className' | 'title'> {
}
export declare function LinkActionRename(props: LinkActionRenameProps): React.JSX.Element | null;
//# sourceMappingURL=linkAction.d.ts.map