import { Quad, Term } from './rdfModel';
export interface MemoryDataset extends Iterable<Quad> {
    readonly size: number;
    add(quad: Quad): this;
    addAll(quads: Iterable<Quad>): this;
    delete(quad: Quad): this;
    clear(): void;
    has(quad: Quad): boolean;
    hasMatches(subject: Term | undefined | null, predicate: Term | undefined | null, object: Term | undefined | null, graph?: Term | null): boolean;
    iterateMatches(subject: Term | undefined | null, predicate: Term | undefined | null, object: Term | undefined | null, graph?: Term | null): Iterable<Quad>;
    forEach(callback: (t: Quad) => void): void;
}
export declare enum IndexQuadBy {
    OnlyQuad = 0,
    S = 1,
    P = 2,
    O = 4,
    SP = 8,
    OP = 16
}
export declare function indexedDataset(indexBy: IndexQuadBy): MemoryDataset;
//# sourceMappingURL=memoryDataset.d.ts.map