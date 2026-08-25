import * as React from 'react';
export declare enum DockSide {
    Left = 1,
    Right = 2
}
export interface AccordionItemProps extends ItemProvidedProps {
    id: string;
    ariaLabel?: string;
    heading?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    bodyClassName?: string;
    bodyRef?: (body: HTMLDivElement) => void;
    children?: React.ReactNode;
    defaultSize?: number;
    defaultCollapsed?: boolean;
    collapsedSize?: number;
    minSize?: number;
}
export interface ItemProvidedProps {
    collapsed?: boolean;
    size?: number | string;
    direction?: 'vertical' | 'horizontal';
    dockSide?: DockSide;
    titleDockExpand?: string;
    titleDockCollapse?: string;
    onChangeCollapsed?: (collapsed: boolean) => void;
    onBeginDragHandle?: (() => void) | undefined;
    onDragHandle?: (dx: number, dy: number) => void;
    onEndDragHandle?: () => void;
}
interface State {
    resizing?: boolean;
}
export declare class AccordionItem extends React.Component<AccordionItemProps, State> {
    private static readonly ARROW_SHIFT_STEP;
    private _element;
    private _header;
    constructor(props: AccordionItemProps);
    get element(): HTMLDivElement | null;
    get header(): HTMLButtonElement | null;
    private get isVertical();
    render(): React.JSX.Element;
    private renderToggleButton;
}
export {};
//# sourceMappingURL=accordionItem.d.ts.map