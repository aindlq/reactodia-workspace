import type { DataProvider } from '../data/dataProvider';
import type { ElementIri, ElementModel } from '../data/model';
export interface UseProvidedEntitiesResult {
    readonly data: ReadonlyMap<ElementIri, ElementModel>;
    readonly status: 'loading' | 'error' | 'completed';
    readonly error?: unknown;
}
export declare function useProvidedEntities(provider: DataProvider | undefined, iris: readonly ElementIri[]): UseProvidedEntitiesResult;
//# sourceMappingURL=useProvidedEntities.d.ts.map