import * as React from 'react';
import { ElementModel, ElementIri } from '../../data/model';
export interface SearchResultsProps {
    items: ReadonlyArray<ElementModel>;
    selection: ReadonlySet<ElementIri>;
    onSelectionChanged: (newSelection: ReadonlySet<ElementIri>) => void;
    isItemDisabled?: (item: ElementModel) => boolean;
    highlightText?: string;
    useDragAndDrop?: boolean;
    multiSelection?: boolean;
    footer?: React.ReactNode;
}
export declare function SearchResults(props: SearchResultsProps): React.JSX.Element;
//# sourceMappingURL=searchResults.d.ts.map