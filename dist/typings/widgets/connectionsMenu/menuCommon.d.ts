import type { ElementModel, LinkTypeIri, LinkTypeModel } from '../../data/model';
export type PropertySuggestionHandler = (params: PropertySuggestionParams) => Promise<PropertyScore[]>;
export interface PropertySuggestionParams {
    elementId: string;
    token: string;
    properties: readonly string[];
    lang: string;
    signal: AbortSignal | undefined;
}
export interface PropertyScore {
    propertyIri: string;
    score: number;
}
export type SortMode = 'alphabet' | 'smart';
export interface ConnectionsData {
    readonly links: ReadonlyArray<LinkTypeModel>;
    readonly counts: ReadonlyMap<LinkTypeIri, ConnectionCount>;
}
export interface ConnectionSuggestions {
    readonly filterKey: string | null;
    readonly scores: ReadonlyMap<LinkTypeIri, PropertyScore>;
}
export interface ConnectionCount {
    readonly inexact: boolean;
    readonly inCount: number;
    readonly outCount: number;
}
export interface ObjectsData {
    readonly chunk: LinkDataChunk;
    readonly elements: ReadonlyArray<ElementModel>;
}
export interface LinkDataChunk {
    readonly chunkId: string;
    readonly linkType: LinkTypeModel;
    readonly direction?: 'in' | 'out';
    readonly expectedCount: number | 'some';
    readonly pageCount: number;
}
export type ObjectPlacingMode = 'separately' | 'grouped';
export declare const CLASS_NAME = "reactodia-connections-menu";
export declare const LINK_COUNT_PER_PAGE = 100;
export declare function LoadingSpinner(props: {
    error?: boolean;
}): import("react").JSX.Element;
//# sourceMappingURL=menuCommon.d.ts.map