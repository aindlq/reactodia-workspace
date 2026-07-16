import * as React from 'react';
import { Events, PropertyChange } from '../../coreUtils/events';
export interface SearchInputProps {
    className?: string;
    inputProps?: React.HTMLProps<HTMLInputElement> & DataAttributes;
    store: SearchInputStore;
    children?: React.ReactNode;
}
type DataAttributes = Record<`data-${string}`, string | number | boolean | undefined | null>;
export declare function SearchInput(props: SearchInputProps): React.JSX.Element;
export interface UseSearchInputStoreOptions<T> {
    initialValue: T;
    submitTimeout?: number | 'immediate' | 'explicit';
    allowSubmit?: (value: T) => boolean;
}
export interface SearchInputStore<T = string> {
    readonly events: Events<SearchInputStoreEvents<T>>;
    get mode(): 'debounce' | 'immediate' | 'explicit';
    get value(): T;
    change(params: {
        value: T;
        action: 'input' | 'submit' | 'clear';
    }): void;
}
export interface SearchInputStoreEvents<T> {
    changeValue: SearchInputStoreChangeValueEvent<T>;
    changeMode: PropertyChange<SearchInputStore<T>, SearchInputStore['mode']>;
    executeSearch: {
        readonly source: SearchInputStore<T>;
        readonly value: T;
    };
    clearSearch: {
        readonly source: SearchInputStore<T>;
        readonly value: T;
    };
}
export interface SearchInputStoreChangeValueEvent<T> extends PropertyChange<SearchInputStore<T>, T> {
    readonly action: 'input' | 'submit' | 'clear';
}
export declare function useSearchInputStore<T = string>(params: UseSearchInputStoreOptions<T>): SearchInputStore<T>;
export {};
//# sourceMappingURL=searchInput.d.ts.map