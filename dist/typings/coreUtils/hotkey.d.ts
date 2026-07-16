import * as React from 'react';
export type HotkeyString = `${'Mod' | 'Ctrl' | 'Meta' | 'Alt' | 'Shift' | 'None'}+${Capitalize<string>}`;
export interface HotkeyAst {
    readonly modifiers: HotkeyModifier;
    readonly key: string;
}
export declare const enum HotkeyModifier {
    None = 0,
    Ctrl = 1,
    Meta = 2,
    Alt = 4,
    Shift = 8
}
export declare function parseHotkey(hotkey: HotkeyString): HotkeyAst;
export declare function formatHotkey(ast: HotkeyAst): string;
export declare function sameHotkeyAst(a: HotkeyAst, b: HotkeyAst): boolean;
export declare function hashHotkeyAst(ast: HotkeyAst): number;
export declare function eventToHotkeyAst(e: React.KeyboardEvent | KeyboardEvent): HotkeyAst;
//# sourceMappingURL=hotkey.d.ts.map