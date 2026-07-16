import * as React from 'react';
import type { ElementModel } from '../../data/model';
import { Link } from '../../diagram/elements';
import { EntityElement, RelationLink } from '../../editor/dataElements';
import { DragEditOperation } from './dragEditLayer';
export interface VisualAuthoringProps {
    propertyEditor: PropertyEditor;
    inlineEntityActions?: boolean;
}
export type PropertyEditor = (options: PropertyEditorOptions) => React.ReactElement;
export type PropertyEditorOptions = PropertyEditorOptionsEntity | PropertyEditorOptionsRelation;
export interface PropertyEditorOptionsEntity {
    readonly type: 'entity';
    readonly target: EntityElement;
    readonly onClose: () => void;
}
export interface PropertyEditorOptionsRelation {
    readonly type: 'relation';
    readonly target: RelationLink;
    readonly onChangeTarget: (newLink: RelationLink) => void;
    readonly onClose: () => void;
}
export interface VisualAuthoringCommands {
    startDragEdit: {
        readonly operation: DragEditOperation;
    };
    editEntity: {
        readonly target: EntityElement | ElementModel;
    };
    findOrCreateEntity: {
        readonly link: RelationLink;
        readonly target: EntityElement;
    };
    editRelation: {
        readonly target: RelationLink;
    };
    renameLink: {
        readonly target: Link;
    };
}
export declare function VisualAuthoring(props: VisualAuthoringProps): React.JSX.Element;
//# sourceMappingURL=visualAuthoring.d.ts.map