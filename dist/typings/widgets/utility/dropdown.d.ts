import * as React from 'react';
export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    direction?: 'down' | 'up';
    expanded: boolean;
    toggle: React.ReactNode;
    children: React.ReactNode;
    onClickOutside?: () => void;
}
export declare function Dropdown(props: DropdownProps): React.JSX.Element;
export interface DropdownMenuProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    direction?: 'down' | 'up';
    title?: string;
    children: React.ReactNode;
}
export declare function DropdownMenu(props: DropdownMenuProps): React.JSX.Element;
export interface DropdownMenuContext {
    expanded: boolean;
    setExpanded: (update: (value: boolean) => boolean) => void;
}
export declare function useDropdownMenu(): DropdownMenuContext;
export interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    title?: string;
    disabled?: boolean;
    onSelect?: () => void;
    children: React.ReactNode;
}
export declare function DropdownMenuItem(props: DropdownMenuItemProps): React.JSX.Element;
export declare function useInsideDropdown(): boolean;
//# sourceMappingURL=dropdown.d.ts.map