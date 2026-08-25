import type { ColorSchemeApi } from '../coreUtils/colorScheme';
import { Rect, Size } from './baseGeometry';
export interface ToSVGOptions {
    colorSchemeApi: ColorSchemeApi;
    styleRoot: HTMLElement | SVGElement;
    layers: ReadonlyArray<SVGSVGElement | HTMLElement>;
    contentBox: Rect;
    preserveDimensions?: boolean;
    convertImagesToDataUris?: boolean;
    removeByCssSelectors?: ReadonlyArray<string>;
    transformExported?: (target: SVGElement) => void | Promise<void>;
    embedFonts?: boolean | EmbedFontsOptions;
    watermarkSvg?: string;
    addXmlHeader?: boolean;
}
export interface EmbedFontsOptions {
    maxFileSize?: number;
    maxTotalSize?: number;
}
export declare function toSVG(options: ToSVGOptions): Promise<string>;
export declare function toMatchableSelectors(selectorText: string): string[];
export interface ToDataURLOptions {
    mimeType?: string;
    width?: number;
    height?: number;
    backgroundColor?: string;
    quality?: number;
    maxFallbackSize?: Size;
}
export declare function toDataURL(options: ToSVGOptions & ToDataURLOptions): Promise<string>;
export declare function dataURLToBlob(dataURL: string): Blob;
//# sourceMappingURL=toSvg.d.ts.map