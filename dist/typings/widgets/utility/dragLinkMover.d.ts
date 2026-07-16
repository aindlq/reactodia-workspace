import * as React from 'react';
import { CanvasApi } from '../../diagram/canvasApi';
import { Element, Link } from '../../diagram/elements';
import { Vector } from '../../diagram/geometry';
export interface DragLinkMoverProps {
    operation: DragLinkOperation;
    createLink: (source: Element, target: Element, original: Link | undefined) => Link;
    canConnect: (source: Element, link: Link, target: Element | undefined, signal: AbortSignal) => Promise<DragLinkConnection>;
    cleanupLink?: (link: Link) => void;
    onFinish?: () => void;
}
export type DragLinkOperation = DragLinkOperationConnect | DragLinkOperationMove;
export interface DragLinkOperationConnect {
    readonly mode: 'connect';
    readonly source: Element;
    readonly point: Vector;
}
export interface DragLinkOperationMove {
    readonly mode: 'moveSource' | 'moveTarget';
    readonly link: Link;
    readonly point: Vector;
}
export interface DragLinkConnection {
    readonly allowed: boolean;
    connect(source: Element, target: Element | undefined, targetPosition: Vector, canvas: CanvasApi, signal: AbortSignal): Promise<void>;
    moveSource(link: Link, newSource: Element, canvas: CanvasApi, signal: AbortSignal): Promise<void>;
    moveTarget(link: Link, newTarget: Element, canvas: CanvasApi, signal: AbortSignal): Promise<void>;
}
export declare function DragLinkMover(props: DragLinkMoverProps): React.JSX.Element;
//# sourceMappingURL=dragLinkMover.d.ts.map