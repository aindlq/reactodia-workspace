import * as React from 'react';
import { ElementTypeIri, ElementTypeModel } from '../../data/model';
import { TreeState } from '../utility/accessibleTree';
export interface ClassTreeResultsProps extends ClassTreeProvidedContext {
    nodes: ReadonlyArray<TreeNode>;
    selection: ClassTreeSelection | undefined;
    onSelect: (selection: ClassTreeSelection) => void;
}
export interface ClassTreeProvidedContext {
    readonly searchText?: string;
    readonly creatableClasses: ReadonlyMap<ElementTypeIri, boolean>;
    readonly onClickCreate: (node: TreeNode) => void;
    readonly onDragCreate: (node: TreeNode) => void;
    readonly draggableItems: boolean;
}
export interface ClassTreeSelection {
    readonly node: TreeNode;
    readonly selection: TreeState<TreeNode>;
}
export declare function ClassTreeResults(props: ClassTreeResultsProps): React.JSX.Element;
export interface TreeNode {
    readonly iri: ElementTypeIri;
    readonly data: ElementTypeModel | undefined;
    readonly label: string;
    readonly derived: ReadonlyArray<TreeNode>;
}
export declare const TreeNode: {
    setDerived: (node: TreeNode, derived: ReadonlyArray<TreeNode>) => TreeNode;
};
//# sourceMappingURL=classTreeResults.d.ts.map