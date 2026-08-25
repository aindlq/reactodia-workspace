import * as React from 'react';
import type { LinkTypeIri } from '../data/model';
import type { ZoomOptions } from '../diagram/canvasApi';
import type { ElementTemplate, ElementTemplateComponent, LinkTemplate, LinkRouter } from '../diagram/customization';
import { Element, Link } from '../diagram/elements';
export interface CanvasProps {
    elementTemplateResolver?: TypedElementResolver;
    linkTemplateResolver?: TypedLinkResolver;
    linkRouter?: LinkRouter;
    showScrollbars?: boolean;
    zoomOptions?: ZoomOptions;
    watermarkSvg?: string;
    watermarkUrl?: string;
    children?: React.ReactNode;
}
export type TypedElementResolver = (types: readonly string[], element: Element) => ElementTemplate | ElementTemplateComponent | undefined;
export type TypedLinkResolver = (linkType: LinkTypeIri | undefined, link: Link) => LinkTemplate | undefined;
export declare function Canvas(props: CanvasProps): React.JSX.Element;
//# sourceMappingURL=canvas.d.ts.map