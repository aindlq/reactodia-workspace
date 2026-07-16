import * as React from 'react';
import type { Events } from './events';
export type SyncStore = (onChange: () => void) => (() => void);
export declare function useObservedProperty<E, K extends keyof E, R>(events: Events<E>, key: K, getSnapshot: () => R, deps?: React.DependencyList): R;
export declare function neverSyncStore(): SyncStore;
export declare function useEventStore<E, K extends keyof E>(events: Events<E> | undefined, key: K, deps?: React.DependencyList): SyncStore;
export declare function useFrameDebouncedStore(subscribe: SyncStore): SyncStore;
export declare function useSyncStore<R>(subscribe: SyncStore, getSnapshot: () => R): R;
export declare function useSyncStoreWithComparator<R>(subscribe: SyncStore, getSnapshot: () => R, equalResults: (a: R, b: R) => boolean): R;
export interface UseAsyncResult<T> {
    readonly data: T | undefined;
    readonly status: 'loading' | 'error' | 'completed';
    readonly error?: unknown;
}
export declare function useAsync<const I extends React.DependencyList, T>(params: {
    input: I;
    load: (input: I, options: {
        signal: AbortSignal;
    }) => Promise<T> | undefined;
}): UseAsyncResult<T>;
export declare function useLatest<T>(value: T): {
    readonly current: T;
};
//# sourceMappingURL=hooks.d.ts.map