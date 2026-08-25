import * as React from 'react';
import type { HotkeyString } from '../../coreUtils/hotkey';
export interface UnifiedSearchProps {
    sections: ReadonlyArray<UnifiedSearchSection>;
    direction?: 'down' | 'up';
    defaultWidth?: number;
    defaultHeight?: number;
    minWidth?: number;
    minHeight?: number;
    offsetWithMaxWidth?: number;
    offsetWithMaxHeight?: number;
    placeholder?: string;
    hotkeyFocus?: HotkeyString | null;
}
export interface UnifiedSearchSection {
    readonly key: string;
    readonly label: React.ReactNode;
    readonly title?: string;
    readonly component: React.ReactNode;
}
export interface UnifiedSearchCommands {
    focus: {
        readonly sectionKey?: string;
    };
}
export declare function UnifiedSearch(props: UnifiedSearchProps): React.JSX.Element;
//# sourceMappingURL=unifiedSearch.d.ts.map