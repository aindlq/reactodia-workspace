import * as React from 'react';
import { FetchOperationTargetType, FetchOperationTypeToTarget } from './dataFetcher';
export interface WithFetchStatusProps<T extends FetchOperationTargetType> {
    type: T;
    target: FetchOperationTypeToTarget[T];
    children: React.ReactElement<{
        className?: string;
    }>;
}
export declare function WithFetchStatus<T extends FetchOperationTargetType>(props: WithFetchStatusProps<T>): React.ReactElement<{
    className?: string;
}, string | React.JSXElementConstructor<any>>;
//# sourceMappingURL=withFetchStatus.d.ts.map