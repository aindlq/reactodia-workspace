import { ElementIri, ElementModel } from '../../data/model';
import { Element } from '../../diagram/elements';
export interface AuthoredEntityContext {
    editedIri?: ElementIri;
    canEdit: boolean | undefined;
    canDelete: boolean | undefined;
    onEdit: (target: Element) => void;
    onDelete: () => void;
}
export declare function useAuthoredEntity(data: ElementModel | undefined, shouldLoad: boolean): AuthoredEntityContext;
//# sourceMappingURL=authoredEntity.d.ts.map