import type { Translation } from '../coreUtils/i18n';
import { type UseAsyncResult } from '../coreUtils/hooks';
import { ElementModel, PropertyTypeIri } from '../data/model';
import * as Rdf from '../data/rdf/rdfModel';
import type { DataDiagramModel } from './dataDiagramModel';
export interface DataLocaleProvider {
    selectEntityLabel(entity: ElementModel): readonly Rdf.Literal[];
    selectEntityImageUrl(entity: ElementModel): string | undefined;
    formatIri(iri: string): string;
    formatEntityLabel(entity: ElementModel, language: string): string;
    formatEntityTypeList(entity: ElementModel, language: string): string;
    prepareAnchor(targetIri: string): Pick<React.ComponentProps<'a'>, 'draggable' | 'href' | 'target' | 'rel' | 'onClick'>;
    resolveAssetUrl(assetIri: string, options: {
        signal?: AbortSignal;
    }): Promise<string>;
}
export interface DefaultDataLocaleProviderOptions {
    readonly model: DataDiagramModel;
    readonly translation: Translation;
    readonly labelProperties?: readonly PropertyTypeIri[];
    readonly imageProperties?: readonly PropertyTypeIri[];
}
export declare class DefaultDataLocaleProvider implements DataLocaleProvider {
    protected readonly model: DataDiagramModel;
    protected readonly translation: Translation;
    private readonly labelProperties;
    private readonly imageProperties;
    private readonly EMPTY_LABELS;
    constructor(options: DefaultDataLocaleProviderOptions);
    selectEntityLabel(entity: ElementModel): readonly Rdf.Literal[];
    selectEntityImageUrl(entity: ElementModel): string | undefined;
    formatIri(iri: string): string;
    formatEntityLabel(entity: ElementModel, language: string): string;
    formatEntityTypeList(entity: ElementModel, language: string): string;
    prepareAnchor(targetIri: string): Pick<React.ComponentProps<'a'>, 'draggable' | 'href' | 'target' | 'rel' | 'onClick'>;
    resolveAssetUrl(assetIri: string, options: {
        signal?: AbortSignal;
    }): Promise<string>;
}
export declare function useResolvedAssetUrl(locale: DataLocaleProvider, assetIri: string | undefined): UseAsyncResult<string | undefined>;
//# sourceMappingURL=dataLocaleProvider.d.ts.map