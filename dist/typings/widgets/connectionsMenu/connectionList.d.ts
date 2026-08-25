import * as React from 'react';
import type { LinkTypeModel } from '../../data/model';
import { SortMode, ConnectionsData, ConnectionSuggestions, LinkDataChunk } from './menuCommon';
export declare function ConnectionList(props: {
    data: ConnectionsData;
    filterKey: string;
    sortMode: SortMode;
    suggestions: ConnectionSuggestions;
    allRelatedLink: LinkTypeModel;
    onExpandLink: (chunk: LinkDataChunk) => void;
    onMoveToFilter?: (chunk: LinkDataChunk) => void;
    scrolledListRef?: React.RefObject<HTMLDivElement | null>;
}): React.JSX.Element;
//# sourceMappingURL=connectionList.d.ts.map