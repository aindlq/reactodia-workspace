import * as React from 'react';
import type * as Rdf from '../../data/rdf/rdfModel';
import type { PropertyTypeIri } from '../../data/model';
import type { MetadataPropertyShape } from '../../data/metadataProvider';
export interface InputSingleProps {
    shape: MetadataPropertyShape;
    languages: ReadonlyArray<string>;
    value: Rdf.NamedNode | Rdf.Literal;
    setValue: (value: Rdf.NamedNode | Rdf.Literal) => void;
    factory: Rdf.DataFactory;
    readonly?: boolean;
    placeholder?: string;
}
export interface InputMultiProps {
    shape: MetadataPropertyShape;
    languages: ReadonlyArray<string>;
    values: ReadonlyArray<Rdf.NamedNode | Rdf.Literal>;
    updateValues: (updater: InputMultiUpdater) => void;
    factory: Rdf.DataFactory;
    readonly?: boolean;
    placeholder?: string;
}
export type InputMultiResolver = (property: PropertyTypeIri, inputProps: InputMultiProps) => React.ReactElement;
export type InputMultiUpdater = (previous: ReadonlyArray<Rdf.NamedNode | Rdf.Literal>) => ReadonlyArray<Rdf.NamedNode | Rdf.Literal>;
//# sourceMappingURL=inputCommon.d.ts.map