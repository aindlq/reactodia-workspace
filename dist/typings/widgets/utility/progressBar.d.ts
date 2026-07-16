import * as React from 'react';
export interface ProgressBarProps {
    state: ProgressState;
    title: string;
    percent?: number;
    height?: number;
}
export type ProgressState = 'none' | 'loading' | 'error' | 'completed';
export declare function ProgressBar(props: ProgressBarProps): React.JSX.Element;
//# sourceMappingURL=progressBar.d.ts.map