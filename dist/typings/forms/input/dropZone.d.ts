import * as React from 'react';
export declare function DropZone(props: {
    className?: string;
    allowDrop?: (item: DataTransferItem) => void;
    onSelect: (files: File[]) => void;
    children?: React.ReactNode;
}): React.JSX.Element;
export declare function useDisallowDropOutsideZone(topLevel: Pick<HTMLElement, 'addEventListener' | 'removeEventListener'>): void;
//# sourceMappingURL=dropZone.d.ts.map