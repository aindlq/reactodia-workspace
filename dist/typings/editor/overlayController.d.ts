import * as React from 'react';
import { Events, PropertyChange } from '../coreUtils/events';
import type { Translation } from '../coreUtils/i18n';
import { Element, Link } from '../diagram/elements';
import { Size } from '../diagram/geometry';
import { DiagramModel } from '../diagram/model';
import { SharedCanvasState } from '../diagram/sharedCanvasState';
import { DialogStyleProps } from '../widgets/dialog';
export interface OverlayControllerProps {
    readonly model: DiagramModel;
    readonly view: SharedCanvasState;
    readonly translation: Translation;
    readonly dialogSettingsProvider: DialogSettingsProvider;
}
export interface OverlayControllerEvents {
    changeOpenedDialog: PropertyChange<OverlayController, OverlayDialog | undefined>;
}
export interface OverlayDialog {
    readonly target?: Element | Link;
    readonly knownType: OverlayDialogType | undefined;
    readonly holdSelection: boolean;
    readonly onClose: (() => void) | undefined;
}
export type OverlayDialogType = string & {
    overlayDialogTypeBrand: void;
};
export interface DialogSettingsProvider {
    getDialogSize(dialog: OverlayDialog): Pick<DialogStyleProps, 'defaultSize' | 'minSize' | 'maxSize'> | undefined;
    persistDialogSize(dialog: OverlayDialog, size: Size): void;
}
export declare class OverlayController {
    private readonly source;
    readonly events: Events<OverlayControllerEvents>;
    private readonly internalSource;
    private readonly model;
    private readonly view;
    private readonly translation;
    private readonly dialogSettingsProvider;
    private _openedDialog;
    private _tasks;
    private _taskError;
    constructor(props: OverlayControllerProps);
    get openedDialog(): OverlayDialog | undefined;
    private onAnyCanvasPointerUp;
    private onAnyCanvasKeydown;
    startTask(params?: {
        title?: string;
        delay?: number;
    }): OverlayTask;
    showSpinnerWhile(operation: Promise<unknown>): void;
    private updateTaskSpinner;
    private setSpinner;
    showDialog(params: {
        target?: Element | Link;
        style: DialogStyleProps;
        content: React.ReactElement<any>;
        dialogType?: OverlayDialogType;
        holdSelection?: boolean;
        onClose?: () => void;
    }): void;
    hideDialog(): void;
    private setDialog;
}
export interface OverlayTask {
    readonly title: string | undefined;
    setError(error: unknown): void;
    end(): void;
}
export declare function OverlaySupport(props: {
    overlay: OverlayController;
}): React.JSX.Element;
export declare class DefaultDialogSettingsProvider implements DialogSettingsProvider {
    private lastDialogSize;
    getDialogSize(dialog: OverlayDialog): Pick<DialogStyleProps, 'defaultSize' | 'minSize' | 'maxSize'> | undefined;
    persistDialogSize(dialog: OverlayDialog, size: Size): void;
}
//# sourceMappingURL=overlayController.d.ts.map