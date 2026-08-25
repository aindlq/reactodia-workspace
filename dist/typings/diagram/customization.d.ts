import type * as React from 'react';
import type { TemplateState, TemplateProperty } from '../data/schema';
import type { Element, Link } from './elements';
import type { SizeProvider, Vector } from './geometry';
import type { GraphStructure } from './model';
export type TypeStyleResolver = (types: ReadonlyArray<string>) => TypeStyle | undefined;
export type ElementTemplateResolver = (element: Element) => ElementTemplate | ElementTemplateComponent | undefined;
export type LinkTemplateResolver = (link: Link) => LinkTemplate | undefined;
export interface TypeStyle {
    readonly color?: string;
    readonly icon?: string;
    readonly iconMonochrome?: boolean;
}
export interface ElementTemplate {
    readonly shape?: 'rect' | 'ellipse';
    readonly renderElement: (props: TemplateProps) => React.ReactNode;
    readonly supports?: Record<TemplateProperty, boolean>;
}
export type ElementTemplateComponent = React.ComponentType<TemplateProps>;
export interface TemplateProps {
    readonly elementId: string;
    readonly element: Element;
    readonly isExpanded: boolean;
    readonly elementState: TemplateState;
    readonly onlySelected: boolean;
}
export interface LinkTemplate {
    markerSource?: LinkMarkerStyle;
    markerTarget?: LinkMarkerStyle;
    spline?: 'straight' | 'smooth';
    readonly renderLink: (props: LinkTemplateProps) => React.ReactNode;
}
export interface LinkMarkerStyle {
    readonly d?: string;
    readonly width?: number;
    readonly height?: number;
    readonly fill?: string;
    readonly stroke?: string;
    readonly strokeWidth?: string | number;
}
export interface LinkTemplateProps {
    readonly link: Link;
    readonly path: string;
    readonly getPathPosition: (offset: number) => Vector;
    readonly markerSource: string;
    readonly markerTarget: string;
    readonly route?: RoutedLink;
    readonly onlySelected: boolean;
}
export interface LinkRouter {
    route(graph: GraphStructure, sizeProvider: SizeProvider): RoutedLinks;
}
export type RoutedLinks = Map<string, RoutedLink>;
export interface RoutedLink {
    readonly linkId: string;
    readonly vertices: ReadonlyArray<Vector>;
    readonly labelTextAnchor?: 'start' | 'middle' | 'end';
}
export interface RenameLinkProvider {
    canRename(link: Link): boolean;
    getLabel(link: Link): string | undefined;
    setLabel(link: Link, label: string): void;
}
//# sourceMappingURL=customization.d.ts.map