import * as React from 'react';
import { type PaperTransform } from '../paper/paperLayers';
import { Link } from './elements';
import { Vector } from './geometry';
import { DiagramModel } from './model';
import { type MutableRenderingState } from './renderingState';
export interface LinkLayerProps {
    model: DiagramModel;
    renderingState: MutableRenderingState;
    shouldRenderLink?: (link: Link) => boolean;
}
interface LinkLayerState {
    readonly version: number;
    readonly shouldUpdateLink: (link: Link) => boolean;
}
export declare class LinkLayer extends React.Component<LinkLayerProps, LinkLayerState> {
    private readonly listener;
    private providedContext;
    private updateState;
    private scheduledToUpdate;
    private labelMeasureRequests;
    private readonly memoizedLinks;
    constructor(props: LinkLayerProps);
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: LinkLayerProps, nextState: LinkLayerState): boolean;
    componentWillUnmount(): void;
    private scheduleUpdateAll;
    private scheduleUpdateLink;
    private popShouldUpdatePredicate;
    private scheduleLabelMeasure;
    private clearLabelMeasure;
    private measureLabels;
    private performUpdate;
    render(): React.JSX.Element;
}
export interface LinkPathProps {
    path: string;
    pathProps?: React.SVGAttributes<SVGPathElement>;
    markerSource?: string;
    markerTarget?: string;
}
export declare function LinkPath(props: LinkPathProps): React.JSX.Element;
export declare function LinkLabelLayer(props: {
    renderingState: MutableRenderingState;
    paperTransform: PaperTransform;
    layerRef?: React.MutableRefObject<HTMLDivElement | null>;
}): React.JSX.Element;
export interface LinkLabelProps {
    link: Link;
    primary?: boolean;
    position: Vector;
    line?: number;
    className?: string;
    style?: React.CSSProperties;
    textAnchor?: 'start' | 'middle' | 'end';
    title?: string;
    children?: React.ReactNode;
}
export declare function LinkLabel(props: LinkLabelProps): React.ReactPortal;
export interface LinkVerticesProps {
    linkId: string;
    vertices: ReadonlyArray<Vector>;
    className?: string;
    vertexRadius?: number;
    fill?: string;
}
export declare function LinkVertices(props: LinkVerticesProps): React.JSX.Element | null;
declare function LinkMarkersInner(props: {
    model: DiagramModel;
    renderingState: MutableRenderingState;
}): React.JSX.Element;
export declare const LinkMarkers: React.MemoExoticComponent<typeof LinkMarkersInner>;
export {};
//# sourceMappingURL=linkLayer.d.ts.map