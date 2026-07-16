import * as React from 'react';
import type { HotkeyString } from '../coreUtils/hotkey';
import { LinkTypeIri } from '../data/model';
import { AnnotationContent } from '../data/schema';
import { Element } from '../diagram/elements';
import type { DiagramModel } from '../diagram/model';
import { EntityElement } from '../editor/dataElements';
import type { DockDirection } from './utility/viewportDock';
export interface SelectionActionStyleProps {
    dock: DockDirection;
    dockRow?: number;
    dockColumn?: number;
    className?: string;
    title?: string;
    hotkey?: HotkeyString | null;
}
export interface SelectionActionProps extends SelectionActionStyleProps {
    disabled?: boolean;
    onSelect?: () => void;
    onMouseDown?: (e: React.MouseEvent) => void;
    onPointerDown?: (e: React.PointerEvent) => void;
    children?: React.ReactNode;
}
export declare function SelectionAction(props: SelectionActionProps): React.JSX.Element;
export declare function useSingleSelectedElement(model: DiagramModel): Element | undefined;
export interface SelectionActionSpinnerProps extends SelectionActionStyleProps {
}
export declare function SelectionActionSpinner(props: SelectionActionSpinnerProps): React.JSX.Element;
export interface SelectionActionRemoveProps extends SelectionActionStyleProps {
    hotkey?: HotkeyString | null;
}
export declare function SelectionActionRemove(props: SelectionActionRemoveProps): React.JSX.Element;
export interface SelectionActionZoomToFitProps extends SelectionActionStyleProps {
}
export declare function SelectionActionZoomToFit(props: SelectionActionZoomToFitProps): React.JSX.Element | null;
export interface SelectionActionLayoutProps extends SelectionActionStyleProps {
}
export declare function SelectionActionLayout(props: SelectionActionLayoutProps): React.JSX.Element | null;
export interface SelectionActionExpandProps extends SelectionActionStyleProps {
}
export declare function SelectionActionExpand(props: SelectionActionExpandProps): React.JSX.Element | null;
export interface SelectionActionAnchorProps extends SelectionActionStyleProps {
    anchorProps?: React.HTMLProps<HTMLAnchorElement>;
    onSelect?: (target: EntityElement, e: React.MouseEvent<HTMLAnchorElement>) => void;
}
export declare function SelectionActionAnchor(props: SelectionActionAnchorProps): React.JSX.Element | null;
export interface SelectionActionConnectionsProps extends SelectionActionStyleProps {
}
export declare function SelectionActionConnections(props: SelectionActionConnectionsProps): React.JSX.Element | null;
export interface SelectionActionAddToFilterProps extends SelectionActionStyleProps {
}
export declare function SelectionActionAddToFilter(props: SelectionActionAddToFilterProps): React.JSX.Element | null;
export interface SelectionActionGroupProps extends SelectionActionStyleProps {
    hotkey?: HotkeyString | null;
}
export declare function SelectionActionGroup(props: SelectionActionGroupProps): React.JSX.Element | null;
export interface SelectionActionEstablishLinkProps extends SelectionActionStyleProps {
    linkType?: LinkTypeIri;
}
export declare function SelectionActionEstablishLink(props: SelectionActionEstablishLinkProps): React.JSX.Element | null;
export interface SelectionActionAnnotateProps extends SelectionActionStyleProps {
    initialContent?: AnnotationContent | GetInitialAnnotationContent | null;
}
type GetInitialAnnotationContent = (elements: readonly Element[]) => AnnotationContent | undefined;
export declare function SelectionActionAnnotate(props: SelectionActionAnnotateProps): React.JSX.Element | null;
export {};
//# sourceMappingURL=selectionAction.d.ts.map