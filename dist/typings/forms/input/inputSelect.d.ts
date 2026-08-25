import * as React from 'react';
import * as Rdf from '../../data/rdf/rdfModel';
import type { InputSingleProps } from './inputCommon';
export interface InputSelectProps extends InputSingleProps {
    variants: ReadonlyArray<InputSelectVariant>;
}
export interface InputSelectVariant {
    readonly value: Rdf.NamedNode | Rdf.Literal;
    readonly label?: string;
}
export declare function InputSelect(props: InputSelectProps): React.JSX.Element;
//# sourceMappingURL=inputSelect.d.ts.map