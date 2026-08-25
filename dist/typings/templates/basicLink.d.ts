import * as React from 'react';
import type { LinkMarkerStyle, LinkTemplateProps } from '../diagram/customization';
export declare const LinkMarkerArrowhead: LinkMarkerStyle;
export declare const LinkMarkerCircle: LinkMarkerStyle;
export declare const LinkMarkerDiamond: LinkMarkerStyle;
export interface BasicLinkProps extends LinkTemplateProps {
    className?: string;
    pathProps?: React.SVGAttributes<SVGPathElement>;
    children?: React.ReactNode;
}
export declare function BasicLink(props: BasicLinkProps): React.JSX.Element;
//# sourceMappingURL=basicLink.d.ts.map