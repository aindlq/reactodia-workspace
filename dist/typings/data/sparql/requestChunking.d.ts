export declare function chunkArray<T>(items: readonly T[], measure: (item: T) => number, maxChunkSize: number): Iterable<readonly T[]>;
export interface DirectedChunk<T> {
    readonly sources: ReadonlyArray<T>;
    readonly targets: ReadonlyArray<T>;
}
export declare function chunkUndirectedCrossProduct<T>(main: ReadonlyArray<T>, paired: ReadonlyArray<T>, measure: (item: T) => number, maxChunkSize: number): Iterable<DirectedChunk<T>>;
//# sourceMappingURL=requestChunking.d.ts.map