import * as React from 'react';
import type { PropertyTypeIri } from '../../data/model';
import type { InputMultiProps } from '../../forms';
import type { PropertyEditorOptions } from '../visualAuthoring/visualAuthoring';
export interface DefaultPropertyEditorProps {
    options: PropertyEditorOptions;
    resolveInput: PropertyEditorResolveInput;
}
export type PropertyEditorResolveInput = (property: PropertyTypeIri, inputProps: InputMultiProps) => React.ReactElement | null;
export declare function DefaultPropertyEditor(props: DefaultPropertyEditorProps): React.JSX.Element | null;
//# sourceMappingURL=defaultPropertyEditor.d.ts.map