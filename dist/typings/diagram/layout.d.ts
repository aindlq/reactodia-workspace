import type { ElementTypeIri, LinkTypeIri } from '../data/model';
import type { Element, Link } from './elements';
import { Rect, Size, SizeProvider, Vector } from './geometry';
import type { DiagramModel } from './model';
export interface LayoutGraph {
    readonly nodes: {
        readonly [id: string]: LayoutNode;
    };
    readonly links: ReadonlyArray<LayoutLink>;
}
export interface LayoutNode {
    readonly types: readonly ElementTypeIri[];
    readonly fixed?: boolean;
}
export interface LayoutLink {
    readonly type: LinkTypeIri;
    readonly source: string;
    readonly target: string;
}
export interface LayoutState {
    readonly bounds: {
        readonly [id: string]: Rect;
    };
}
export type LayoutFunction = (graph: LayoutGraph, state: LayoutState) => Promise<LayoutState>;
export interface LayoutTypeProvider {
    readonly getElementTypes?: (element: Element) => readonly ElementTypeIri[];
    readonly getLinkType?: (link: Link) => LinkTypeIri;
}
export interface CalculatedLayout {
    positions: Map<string, Vector>;
    sizes: Map<string, Size>;
    nestedLayouts: CalculatedLayout[];
}
export declare function calculateLayout(params: {
    layoutFunction: LayoutFunction;
    model: DiagramModel;
    sizeProvider: SizeProvider;
    typeProvider?: LayoutTypeProvider;
    fixedElements?: ReadonlySet<Element>;
    selectedElements?: ReadonlySet<Element>;
    signal?: AbortSignal;
}): Promise<CalculatedLayout>;
export declare function applyLayout(layout: CalculatedLayout, model: DiagramModel): void;
export declare function translateToPositiveQuadrant(positions: Map<string, Vector>, offset: Vector): void;
export declare function uniformGrid(params: {
    rows: number;
    cellSize: Vector;
}): (cellIndex: number) => Rect;
//# sourceMappingURL=layout.d.ts.map