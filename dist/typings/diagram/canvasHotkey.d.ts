import { type HotkeyString } from '../coreUtils/hotkey';
export interface CanvasHotkey {
    readonly text: string;
}
export declare function useCanvasHotkey(hotkey: HotkeyString | undefined | null, action: (() => void) | undefined): CanvasHotkey | undefined;
//# sourceMappingURL=canvasHotkey.d.ts.map