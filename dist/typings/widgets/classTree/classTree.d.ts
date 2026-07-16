import * as React from 'react';
import { CanvasDropEvent } from '../../diagram/canvasApi';
import type { EntityElement } from '../../editor/dataElements';
import { SearchInputStore } from '../utility/searchInput';
export interface ClassTreeProps {
    className?: string;
    searchStore?: SearchInputStore;
    searchTimeout?: number;
    minSearchTermLength?: number;
    draggableItems?: boolean;
    placeCreatedEntity?: (element: EntityElement, dropEvent: CanvasDropEvent | undefined) => Promise<void>;
}
export declare function ClassTree(props: ClassTreeProps): React.JSX.Element;
//# sourceMappingURL=classTree.d.ts.map