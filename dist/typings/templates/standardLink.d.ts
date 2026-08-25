import * as React from 'react';
import type { PropertyTypeIri } from '../data/model';
import type { LinkTemplate, LinkTemplateProps } from '../diagram/customization';
import { type LinkLabelProps } from '../diagram/linkLayer';
export declare const StandardLinkTemplate: LinkTemplate;
export declare const DefaultLinkTemplate: LinkTemplate;
export interface StandardRelationProps extends LinkTemplateProps {
    className?: string;
    pathProps?: React.SVGAttributes<SVGPathElement>;
    primaryLabelProps?: StandardRelationLabelStyle;
    propertyLabelProps?: StandardRelationLabelStyle | ((propertyIri: PropertyTypeIri) => StandardRelationLabelStyle | undefined | null);
    propertyLabelStartLine?: number;
    prependLabels?: React.ReactNode;
    children?: React.ReactNode;
}
export type StandardRelationLabelStyle = Omit<LinkLabelProps, 'primary' | 'link' | 'position' | 'line' | 'children'>;
export declare function StandardRelation(props: StandardRelationProps): React.JSX.Element;
export interface DefaultLinkProps extends StandardRelationProps {
}
export declare function DefaultLink(props: StandardRelationProps): React.JSX.Element;
//# sourceMappingURL=standardLink.d.ts.map