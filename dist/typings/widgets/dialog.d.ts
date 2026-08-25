import * as React from 'react';
import { CanvasContext } from '../diagram/canvasApi';
import { Element, Link } from '../diagram/elements';
import { Rect, Size } from '../diagram/geometry';
export interface DialogProps extends DialogStyleProps {
    target?: DialogTarget;
    onResize?: (size: Size) => void;
    onHide: () => void;
    mode?: 'centered' | 'fillViewport';
    closeTitle?: string;
    children: React.ReactNode;
}
export interface DialogStyleProps {
    defaultSize?: Size;
    minSize?: Size;
    maxSize?: Size;
    resizableBy?: 'none' | 'x' | 'y' | 'all';
    caption: string;
    closable?: boolean;
    autoFocus?: boolean;
    dock?: 'n' | 'e' | 's' | 'w';
    dockMargin?: number;
}
interface State {
    width?: number;
    height?: number;
}
export declare class Dialog extends React.Component<DialogProps, State> {
    static contextType: React.Context<CanvasContext | null>;
    readonly context: CanvasContext;
    private unsubscribeFromTarget;
    private readonly listener;
    private root;
    private updateAll;
    private startSize;
    constructor(props: DialogProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: DialogProps): void;
    componentWillUnmount(): void;
    private listenToTarget;
    private calculatePosition;
    private getViewPortScrollablePoints;
    private getDialogScrollableBounds;
    private focusOn;
    private onStartDragging;
    private calculateHeight;
    private calculateWidth;
    private onDragHandle;
    render(): React.JSX.Element;
    private getCurrentSize;
    private onClose;
    private onEndDragHandle;
}
export interface DialogTarget {
    readonly subscribe: (onChange: () => void, context: CanvasContext) => () => void;
    readonly getBounds: (context: CanvasContext) => Rect;
}
export declare const DialogTarget: {
    readonly forElement: (element: Element) => DialogTarget;
    readonly forLink: (link: Link) => DialogTarget;
};
export {};
//# sourceMappingURL=dialog.d.ts.map