import * as React from 'react';
export interface GroupPaginatorProps {
    readonly pageIndex: number;
    readonly pageCount: number;
    readonly onChangePage: (page: number) => void;
    readonly pageSize: number;
    readonly pageSizes: ReadonlyArray<number>;
    readonly onChangePageSize: (size: number) => void;
}
export declare function GroupPaginator(props: GroupPaginatorProps): React.JSX.Element;
//# sourceMappingURL=groupPaginator.d.ts.map