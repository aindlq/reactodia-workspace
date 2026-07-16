import type { KeyedSyncStore } from '../coreUtils/keyedObserver';
import type { ElementTypeIri, LinkTypeIri, PropertyTypeIri } from '../data/model';
import type { DataDiagramModel } from './dataDiagramModel';
export declare const subscribeElementTypes: KeyedSyncStore<ElementTypeIri, DataDiagramModel>;
export declare const subscribePropertyTypes: KeyedSyncStore<PropertyTypeIri, DataDiagramModel>;
export declare const subscribeLinkTypes: KeyedSyncStore<LinkTypeIri, DataDiagramModel>;
//# sourceMappingURL=observedElement.d.ts.map