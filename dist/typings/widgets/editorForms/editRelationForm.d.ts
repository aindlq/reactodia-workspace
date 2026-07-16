import * as React from 'react';
import { ElementModel, LinkModel, PropertyTypeIri } from '../../data/model';
import { RelationLink } from '../../editor/dataElements';
import type { InputMultiProps } from '../../forms';
import type { PropertyEditorOptionsRelation } from '../visualAuthoring/visualAuthoring';
export interface RelationEditorProvidedProps {
    status: 'ok' | 'validating' | 'invalid';
    data: LinkModel;
    linkSource: ElementModel;
    linkTarget: ElementModel;
    updateData: (update: (previous: LinkModel) => LinkModel) => void;
    applyChanges: () => void;
}
export declare function RelationEditor(props: {
    relation: RelationLink;
    onChangeTarget: (newLink: RelationLink) => void;
    children: (props: RelationEditorProvidedProps) => React.ReactElement;
}): React.JSX.Element;
export interface DefaultEditRelationFormProps extends PropertyEditorOptionsRelation {
    resolveInput: (property: PropertyTypeIri, inputProps: InputMultiProps) => React.ReactElement | null;
}
export declare function DefaultEditRelationForm(props: DefaultEditRelationFormProps): React.JSX.Element;
export declare function RelationTypeSelector(): React.JSX.Element;
//# sourceMappingURL=editRelationForm.d.ts.map