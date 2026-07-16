import { Sha256 } from './sha256';
export type AdjacencyRange<K> = ReadonlySet<K>;
export interface AdjacencyBlock<K> {
    readonly sources: AdjacencyRange<K>;
    readonly targets: AdjacencyRange<K>;
}
export declare function subtractAdjacencyBlocks<K extends string | number>(base: AdjacencyBlock<K>, disjointBySources: ReadonlyArray<AdjacencyBlock<K>>): Array<AdjacencyBlock<K>>;
export declare function hashAdjacencyRange<K extends string>(range: AdjacencyRange<K>, hasher: Sha256): string;
//# sourceMappingURL=adjacencyBlocks.d.ts.map