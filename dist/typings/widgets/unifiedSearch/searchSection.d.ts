import * as React from 'react';
import { Events } from '../../coreUtils/events';
import { SearchInputStore, SearchInputStoreEvents } from '../utility/searchInput';
export interface UnifiedSearchSectionContext {
    readonly searchStore: ExternalSearchStore;
    readonly isSectionActive: boolean;
    readonly setSectionActive: (active: boolean, searchExtra?: object) => void;
}
export interface ExternalSearchStore extends Pick<SearchInputStore, 'value' | 'change'> {
    readonly events: Events<Pick<SearchInputStoreEvents<string>, 'changeValue'>>;
}
export declare const UnifiedSearchSectionContext: React.Context<UnifiedSearchSectionContext | null>;
export interface UseUnifiedSearchSectionOptions {
    searchTimeout?: number;
    allowSubmit?: (term: string) => boolean;
}
export interface UnifiedSearchSectionProvidedContext {
    readonly shouldRender: boolean;
    readonly isSectionActive: boolean;
    readonly setSectionActive: (active: boolean, searchExtra?: object) => void;
    readonly searchStore: SearchInputStore;
}
export declare function useUnifiedSearchSection(props?: UseUnifiedSearchSectionOptions): UnifiedSearchSectionProvidedContext;
//# sourceMappingURL=searchSection.d.ts.map