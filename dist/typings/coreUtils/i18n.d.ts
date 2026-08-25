/// <reference path="../../../i18n/i18n.reactodia-translation.d.ts" preserve="true" />
import * as React from 'react';
import type * as Rdf from '../data/rdf/rdfModel';
import DefaultTranslationBundle from '../../i18n/translations/en.reactodia-translation.json';
type DefaultBundleData = typeof DefaultTranslationBundle;
export type TranslationBundle = TranslationPartial<DefaultBundleData>;
export type TranslationKey = TranslationKeyOf<DefaultBundleData>;
export interface Translation<K extends string = TranslationKey> {
    text(key: K, placeholders?: Record<string, string | number | boolean>): string;
    textOptional(key: K, placeholders?: Record<string, string | number | boolean>): string | undefined;
    template(key: K, parts: Record<string, React.ReactNode>): React.ReactNode;
    selectLabel(labels: ReadonlyArray<Rdf.Literal>, language: string): Rdf.Literal | undefined;
    selectValues(values: ReadonlyArray<Rdf.NamedNode | Rdf.Literal>, language: string): Array<Rdf.NamedNode | Rdf.Literal>;
    formatLabel(labels: ReadonlyArray<Rdf.Literal> | undefined, fallbackIri: string, language: string): string;
}
export type LabelLanguageSelector = (labels: ReadonlyArray<Rdf.Literal>, language: string) => Rdf.Literal | undefined;
export interface TranslatedProperty<Iri> {
    readonly iri: Iri;
    readonly label: string;
    readonly values: ReadonlyArray<Rdf.NamedNode | Rdf.Literal>;
}
export declare const TranslationContext: React.Context<Translation<string> | null>;
export declare function TranslationProvider(props: {
    translation: Translation;
    children: React.ReactNode;
}): React.JSX.Element;
export declare function useTranslation(): Translation;
type TranslationPartial<T> = {
    [K in keyof T]?: Partial<T[K]>;
};
type TranslationKeyOf<T> = DeepPath<Omit<T, '$schema'>>;
type DeepPath<T> = T extends object ? ({
    [K in string & keyof T]: T[K] extends object ? `${K}.${DeepPath<T[K]>}` : K;
}[string & keyof T]) : never;
export declare class TranslatedText {
    private readonly key;
    private readonly placeholders;
    private constructor();
    static text(key: TranslationKey, placeholders?: Record<string, string | number | boolean>): TranslatedText;
    resolve(translation: Translation<any>): string;
}
export {};
//# sourceMappingURL=i18n.d.ts.map