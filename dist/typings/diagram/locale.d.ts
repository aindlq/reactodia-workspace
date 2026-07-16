import * as React from 'react';
import { LabelLanguageSelector, Translation, TranslationKey, TranslationBundle } from '../coreUtils/i18n';
import * as Rdf from '../data/rdf/rdfModel';
export declare const DefaultTranslationBundle: TranslationBundle;
export declare class DefaultTranslation<K extends string = TranslationKey> implements Translation<K> {
    protected readonly bundles: ReadonlyArray<Partial<TranslationBundle>>;
    private readonly _selectLabel;
    constructor(options: {
        bundles: ReadonlyArray<Partial<TranslationBundle>>;
        selectLabel?: LabelLanguageSelector;
    });
    private getString;
    text(key: K, placeholders?: Record<string, string | number | boolean>): string;
    textOptional(key: K, placeholders?: Record<string, string | number | boolean>): string | undefined;
    template(key: K, parts: Record<string, React.ReactNode>): React.ReactNode;
    selectLabel(labels: ReadonlyArray<Rdf.Literal>, language: string): Rdf.Literal | undefined;
    selectValues(values: ReadonlyArray<Rdf.NamedNode | Rdf.Literal>, language: string): Array<Rdf.NamedNode | Rdf.Literal>;
    formatLabel(labels: ReadonlyArray<Rdf.Literal> | undefined, fallbackIri: string, language: string): string;
}
//# sourceMappingURL=locale.d.ts.map