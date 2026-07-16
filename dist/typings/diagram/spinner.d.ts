import * as React from 'react';
export interface SpinnerProps {
    size?: number;
    position?: {
        readonly x: number;
        readonly y: number;
    };
    statusText?: string;
    errorOccurred?: boolean;
}
export declare function Spinner(props: SpinnerProps): React.JSX.Element;
export declare function HtmlSpinner(props: {
    width: number;
    height: number;
    errorOccurred?: boolean;
}): React.JSX.Element;
//# sourceMappingURL=spinner.d.ts.map