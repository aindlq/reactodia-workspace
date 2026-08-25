import * as React from 'react';
export type ColorScheme = 'light' | 'dark';
export declare const ColorSchemeContext: React.Context<ColorScheme | null>;
export declare function useColorScheme(): 'light' | 'dark';
export interface ColorSchemeApi {
    readonly defined: boolean;
    readonly actInColorScheme: (scheme: ColorScheme, action: () => void) => void;
}
export declare const ColorSchemeApi: React.Context<ColorSchemeApi>;
//# sourceMappingURL=colorScheme.d.ts.map