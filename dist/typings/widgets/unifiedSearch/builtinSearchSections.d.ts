import * as React from 'react';
import type { CanvasDropEvent } from '../../diagram/canvasApi';
import type { EntityElement } from '../../editor/dataElements';
export declare function SearchSectionElementTypes(props: {
    searchTimeout?: number;
    minSearchTermLength?: number;
    draggableItems?: boolean;
    placeCreatedEntity?: (element: EntityElement, dropEvent: CanvasDropEvent | undefined) => Promise<void>;
}): React.JSX.Element | null;
export declare function SearchSectionEntities(props: {
    searchTimeout?: number;
    minSearchTermLength?: number;
}): React.JSX.Element;
export declare function SearchSectionLinkTypes(props: {
    searchTimeout?: number;
    minSearchTermLength?: number;
}): React.JSX.Element | null;
//# sourceMappingURL=builtinSearchSections.d.ts.map