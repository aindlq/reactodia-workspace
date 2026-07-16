import * as React from 'react';
export declare function FocusGroup(props: {
    children: (providedProps: FocusGroupProvidedProps) => React.ReactNode;
}): React.JSX.Element;
export interface FocusGroupProvidedProps {
    readonly ref: (element: HTMLElement | null) => void;
    readonly controller: FocusGroupController;
}
export declare function useFocusGroup(): FocusGroupController;
export interface UseFocusGroupItemResult {
    readonly ref: (element: HTMLElement | null) => void;
    readonly tabIndex: -1 | 0 | undefined;
}
export declare function useFocusGroupItem(params?: {
    active?: boolean;
    debugLabel?: string | number;
}): UseFocusGroupItemResult;
export interface FocusGroupController {
    getRoot(): HTMLElement | null;
    focusAt(leaf: HTMLElement): void;
    focusPrevious(params: {
        from: Element;
    }): void;
    focusNext(params: {
        from: Element;
    }): void;
    focusParent(params: {
        from: Element;
    }): void;
    ensureFocusable(params?: {
        reset?: boolean;
    }): void;
    readonly defaultClick: (e: React.MouseEvent) => void;
    readonly defaultKeyDown: (e: React.KeyboardEvent) => void;
}
//# sourceMappingURL=focusGroup.d.ts.map