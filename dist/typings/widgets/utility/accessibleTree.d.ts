import * as React from 'react';
export interface AccessibleTreeProps<T, S> {
    model: TreeModel<T, S>;
    items: readonly T[];
    renderItem: TreeRenderItem<T, S>;
    expanded?: TreeState<boolean>;
    defaultExpanded?: boolean;
    onSetExpanded?: (item: T, path: TreeDownPath, expand: boolean) => void;
    selected?: TreeState<S>;
    defaultSelected?: S;
    rootProps: React.HTMLProps<HTMLUListElement>;
    forestProps: React.HTMLProps<HTMLUListElement>;
    itemProps: React.HTMLProps<HTMLLIElement>;
}
export interface TreeModel<T, S> {
    readonly getKey: (item: T) => string;
    readonly getChildren: (item: T) => readonly T[] | undefined;
    readonly getDefaultSelected: (item: T, selected: S | undefined) => S | undefined;
    readonly isActive: (item: T) => boolean;
}
export type TreeRenderItem<T, S> = (props: {
    item: T;
    path: TreeUpPath;
    focusProps: TreeFocusableProps;
    expanded: boolean;
    selected: S | undefined;
}) => React.ReactElement | null;
export interface TreeFocusableProps {
    readonly tabIndex: number | undefined;
}
export declare function AccessibleTree<T extends object, S>(props: AccessibleTreeProps<T, S>): React.JSX.Element;
export interface TreeUpPath {
    readonly parent: TreeUpPath | undefined;
    readonly key: string;
}
export interface TreeDownPath {
    readonly child: TreeDownPath | undefined;
    readonly key: string;
}
export declare class TreeState<S> implements Iterable<readonly [string, TreeItemState<S>]> {
    private readonly states;
    constructor(states?: Map<string, TreeItemState<S>>);
    [Symbol.iterator](): Iterator<readonly [string, TreeItemState<S>]>;
    get(key: string): TreeItemState<S> | undefined;
    setAt(path: TreeDownPath, updater: (previous: S | undefined) => S | undefined): TreeState<S>;
    private static setAtItem;
}
export interface TreeItemState<S> {
    readonly value: S | undefined;
    readonly level?: TreeState<S> | undefined;
}
export declare function treePathToDown(upPath: TreeUpPath): TreeDownPath;
//# sourceMappingURL=accessibleTree.d.ts.map