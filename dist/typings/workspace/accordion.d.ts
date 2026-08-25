import * as React from 'react';
import { AccordionItemProps } from './accordionItem';
export interface AccordionProps {
    className?: string;
    style?: React.CSSProperties;
    onStartResize?: (direction: 'vertical' | 'horizontal') => void;
    onResize?: (direction: 'vertical' | 'horizontal') => void;
    children?: AccordionChild | ReadonlyArray<AccordionChild>;
    direction: 'vertical' | 'horizontal';
    animationDuration?: number;
}
type AccordionChild = React.ReactElement<AccordionItemProps> | null;
interface State {
    readonly sizes: readonly number[];
    readonly percents: readonly string[];
    readonly collapsed: readonly boolean[];
    readonly resizing: boolean;
}
export declare class Accordion extends React.Component<AccordionProps, State> {
    private element;
    private items;
    private dragOrigin;
    private defaultProps;
    constructor(props: AccordionProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: AccordionProps, prevState: State): void;
    private get isVertical();
    private clientSize;
    private offsetSize;
    private updateSizes;
    render(): React.JSX.Element;
    private onElementMount;
    private renderItems;
    private onBeginDragHandle;
    private onEndDragHandle;
    private tryCollapseTooSmallItem;
    private computeEffectiveItemSizes;
    private sizeWhenCollapsed;
    private onDragHandle;
    private onItemChangeCollapsed;
}
export {};
//# sourceMappingURL=accordion.d.ts.map