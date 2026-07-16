import type { Unsubscribe } from './events';
export declare class KeyedObserver<Key extends string> {
    private subscribe;
    private observedKeys;
    constructor(subscribe: (key: Key) => Unsubscribe | undefined);
    setSubscribe(subscribe: (key: Key) => Unsubscribe | undefined): void;
    observe(keys: ReadonlyArray<Key>): void;
    stopListening(): void;
}
export type KeyedSyncStore<K, Context> = (key: K, context: Context, onStoreChange: () => void) => () => void;
export declare function useKeyedSyncStore<K extends string, Context>(store: KeyedSyncStore<K, Context>, keys: ReadonlyArray<K>, context: Context): void;
//# sourceMappingURL=keyedObserver.d.ts.map