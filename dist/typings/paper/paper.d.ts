import * as React from 'react';
import { CanvasMetrics, CenterToOptions, ScaleOptions, ViewportOptions } from './paperApi';
import { Vector, Rect, Size } from './baseGeometry';
import { PaperTransform } from './paperLayers';
export interface PaperProps {
    className?: string;
    style?: React.CSSProperties;
    panOnTouch?: boolean;
    showScrollbars?: boolean;
    scaleDefaults: ScaleDefaults;
    viewportDefaults: Required<Pick<ViewportOptions, 'duration'>>;
    onChangeTransform?: (previous: PaperTransform) => void;
    onContextMenu?: (e: React.MouseEvent) => void;
    onDragOver?: (e: DragEvent, clientCoords: Vector) => boolean;
    onDragDrop?: (e: DragEvent, clientCoords: Vector) => void;
    onKeyDown?: (e: React.KeyboardEvent) => void;
    onKeyUp?: (e: React.KeyboardEvent) => void;
    onPointerOperation?: (e: React.PointerEvent) => PaperPointerOperation | undefined;
    onResize?: () => void;
    onScrollPassive?: (e: Event) => void;
    pageSize: Size;
    contentBounds: Rect;
    renderLayers: (transform: PaperTransform) => React.ReactNode;
    paneProps?: React.HTMLProps<HTMLDivElement>;
    watermark?: React.ReactNode;
    children?: React.ReactNode;
}
export interface ScaleDefaults {
    min: number;
    max: number;
    maxFit: number;
    wheelToScaleDelta: (e: WheelEvent) => number | undefined;
}
export interface PaperPointerOperation {
    readonly action?: 'panning' | 'move' | undefined;
    hasSameTarget(e: React.UIEvent<HTMLElement>): boolean;
    onPointerDown(e: React.PointerEvent): void;
    onPointerMove(e: PointerEvent): void;
    onPointerUp(e: PointerEvent, options: {
        triggerAsClick: boolean;
    }): void;
    onPointerCancel(e: PointerEvent | undefined): void;
}
interface State {
    readonly paneRef: React.RefObject<HTMLDivElement | null>;
    readonly contentBounds: Rect;
    readonly pageSize: Size;
    readonly transform: PaperTransform;
    readonly mounted: boolean;
}
interface SnapshotBeforeUpdate {
    readonly scroll?: {
        readonly left: number;
        readonly top: number;
    };
}
export declare class Paper extends React.Component<PaperProps, State> {
    private readonly rootRef;
    private readonly paneRef;
    private resizeObserver;
    private viewportAnimation;
    private movingState;
    readonly metrics: CanvasMetrics;
    constructor(props: PaperProps);
    get root(): HTMLDivElement | null;
    get pane(): HTMLDivElement | null;
    render(): React.JSX.Element;
    componentDidMount(): void;
    static getDerivedStateFromProps(props: PaperProps, state: State): State | null;
    getSnapshotBeforeUpdate(prevProps: PaperProps, prevState: State): SnapshotBeforeUpdate;
    componentDidUpdate(prevProps: PaperProps, prevState: State, snapshot: SnapshotBeforeUpdate): void;
    componentWillUnmount(): void;
    private onAreaPointerDown;
    private onPointerDown;
    private handleMultiPointerDown;
    private onPointerMove;
    private handleMultiPointerMove;
    private onPointerUp;
    private onPointerCancel;
    private onScrollCapture;
    private stopListeningToPointerMove;
    private onWheel;
    private onResize;
    centerViewport(paperPosition: Vector, options: CenterToOptions): Promise<void>;
    get scale(): number;
    setScale(value: number, options?: ScaleOptions): Promise<void>;
    scaleToFitRect(paperRect: Rect, options?: ViewportOptions): Promise<void>;
    private onDragOver;
    private onDragDrop;
    private onScrollPassive;
    private get viewportState();
    private setViewportState;
    private applyViewportState;
}
export declare function wheelToScaleDeltaDefault(e: WheelEvent, factor?: number): number;
export {};
//# sourceMappingURL=paper.d.ts.map