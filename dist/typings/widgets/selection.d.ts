import * as React from 'react';
import type { HotkeyString } from '../coreUtils/hotkey';
export interface SelectionProps {
    boxMargin?: number;
    itemMargin?: number;
    hotkeySelectAll?: HotkeyString | null;
    children?: React.ReactNode;
}
export declare function Selection(props: SelectionProps): React.JSX.Element | null;
//# sourceMappingURL=selection.d.ts.map