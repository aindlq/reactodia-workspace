interface BasicMap<K, V> {
    get(key: K): V | undefined;
    set(key: K, value: V): unknown;
    delete(key: K): unknown;
}
export declare function multimapArrayAdd<K, V>(map: BasicMap<K, V[]>, key: K, value: V): void;
export declare function multimapAdd<K, V>(map: BasicMap<K, Set<V>>, key: K, value: V): void;
export declare function multimapDelete<K, V>(map: BasicMap<K, Set<V>>, key: K, value: V): void;
export declare function shallowArrayEqual<T>(a: ReadonlyArray<T>, b: ReadonlyArray<T>): boolean;
export declare class OrderedMap<V> {
    private mapping;
    private ordered;
    reorder(compare: (a: V, b: V) => number): void;
    get items(): ReadonlyArray<V>;
    get(key: string): V | undefined;
    push(key: string, value: V): void;
    delete(key: string): V | undefined;
}
export declare function moveComparator<T>(items: ReadonlyArray<T>, selected: ReadonlyArray<T>, moveDirection: 'start' | 'end'): (a: T, b: T) => number;
export {};
//# sourceMappingURL=collections.d.ts.map