import * as React from 'react';
import type { ElementModel } from '../../data/model';
import { ObjectsData, LinkDataChunk, ObjectPlacingMode } from './menuCommon';
export declare function EntityList(props: {
    data: ObjectsData;
    isLoading?: boolean;
    filterKey?: string;
    onPressAddSelected: (selected: ElementModel[], mode: ObjectPlacingMode) => void;
    onMoveToFilter: ((linkDataChunk: LinkDataChunk) => void) | undefined;
}): React.JSX.Element;
//# sourceMappingURL=entityList.d.ts.map