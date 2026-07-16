import * as React from 'react';
import { LinkTypeIri } from '../../data/model';
import { Vector } from '../../diagram/geometry';
import { EntityElement, RelationLink } from '../../editor/dataElements';
export interface DragEditLayerProps {
    operation: DragEditOperation;
    onFinishEditing: () => void;
}
export type DragEditOperation = DragEditConnect | DragEditMoveEndpoint;
export interface DragEditConnect {
    readonly mode: 'connect';
    readonly source: EntityElement;
    readonly linkType?: LinkTypeIri;
    readonly point: Vector;
}
export interface DragEditMoveEndpoint {
    readonly mode: 'moveSource' | 'moveTarget';
    readonly link: RelationLink;
    readonly point: Vector;
}
export declare function DragEditLayer(props: DragEditLayerProps): React.JSX.Element;
//# sourceMappingURL=dragEditLayer.d.ts.map