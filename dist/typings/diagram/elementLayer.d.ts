import * as React from 'react';
import { type PaperTransform } from '../paper/paperLayers';
import { TemplateProps } from './customization';
import { Element } from './elements';
import { DiagramModel } from './model';
import { MutableRenderingState } from './renderingState';
export interface ElementLayerProps {
    layerRef: React.Ref<HTMLDivElement | null>;
    model: DiagramModel;
    renderingState: MutableRenderingState;
    paperTransform: PaperTransform;
}
interface State {
    readonly version: number;
    readonly elementStates: ReadonlyMap<Element, ElementState>;
}
interface ElementState {
    element: Element;
    templateProps: TemplateProps;
    blurred: boolean;
}
export declare class ElementLayer extends React.Component<ElementLayerProps, State> {
    private readonly listener;
    private redrawBatch;
    private readonly memoizedElements;
    private sizeRequests;
    constructor(props: ElementLayerProps);
    render(): React.JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private requestRedraw;
    private requestRedrawAll;
    private redrawElements;
    private requestSizeUpdate;
    private recomputeQueuedSizes;
}
export declare function ElementDecoration(props: {
    target: Element;
    children: React.ReactNode;
}): React.ReactPortal;
export {};
//# sourceMappingURL=elementLayer.d.ts.map