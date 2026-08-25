import { type CanvasDragoverEvent, type CanvasDropEvent } from '../diagram/canvasApi';
import { Element } from '../diagram/elements';
export interface DropOnCanvasProps {
    allowDrop?: (e: CanvasDragoverEvent) => boolean;
    getDroppedItems?: (e: CanvasDropEvent) => ReadonlyArray<DropOnCanvasItem>;
}
export type DropOnCanvasItem = DropItemElement;
export interface DropItemElement {
    readonly type: 'element';
    readonly element: Element;
}
export declare function DropOnCanvas(props: DropOnCanvasProps): null;
export declare function defaultGetDroppedOnCanvasItems(e: CanvasDropEvent): DropOnCanvasItem[];
//# sourceMappingURL=dropOnCanvas.d.ts.map