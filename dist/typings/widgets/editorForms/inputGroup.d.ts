import * as React from 'react';
import { PropertyTypeIri } from '../../data/model';
import * as Rdf from '../../data/rdf/rdfModel';
import type { MetadataPropertyShape } from '../../data/metadataProvider';
import type { InputMultiUpdater, InputMultiProps } from '../../forms';
export interface InputGroupProps {
    className?: string;
    languages: ReadonlyArray<string>;
    readonly?: boolean;
    propertyShapes: ReadonlyMap<PropertyTypeIri, MetadataPropertyShape>;
    extraPropertyShape?: MetadataPropertyShape;
    propertyValues: {
        readonly [id: string]: ReadonlyArray<Rdf.NamedNode | Rdf.Literal>;
    };
    onChangeData: (property: PropertyTypeIri, updater: InputMultiUpdater) => void;
    resolveInput: (property: PropertyTypeIri, props: InputMultiProps) => React.ReactElement | null;
}
export declare function InputGroup(props: InputGroupProps): React.JSX.Element | null;
//# sourceMappingURL=inputGroup.d.ts.map