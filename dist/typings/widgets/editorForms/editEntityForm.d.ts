import * as React from 'react';
import type { ElementModel, PropertyTypeIri } from '../../data/model';
import { EntityElement } from '../../editor/dataElements';
import type { InputMultiProps } from '../../forms';
import type { PropertyEditorOptionsEntity } from '../visualAuthoring/visualAuthoring';
export interface EntityEditorProvidedProps {
    data: ElementModel;
    updateData: (update: (previous: ElementModel) => ElementModel) => void;
    applyChanges: () => void;
}
export declare function EntityEditor(props: {
    target: EntityElement;
    children: (props: EntityEditorProvidedProps) => React.ReactElement;
}): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export interface DefaultEditEntityFormProps extends PropertyEditorOptionsEntity {
    resolveInput: (property: PropertyTypeIri, inputProps: InputMultiProps) => React.ReactElement | null;
}
export declare function DefaultEditEntityForm(props: DefaultEditEntityFormProps): React.JSX.Element;
//# sourceMappingURL=editEntityForm.d.ts.map