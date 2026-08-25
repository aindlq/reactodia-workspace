import * as React from 'react';
import type { PropertyTypeIri } from '../data/model';
import type { ElementTemplate, LinkTemplate, TemplateProps } from '../diagram/customization';
import { type LinkLabelProps } from '../diagram/linkLayer';
import { type BasicLinkProps } from './basicLink';
export declare const NoteTemplate: ElementTemplate;
export interface NoteAnnotationProps extends TemplateProps {
}
export declare function NoteAnnotation(props: NoteAnnotationProps): React.JSX.Element;
export interface NoteEntityProps extends TemplateProps {
    textProperty?: PropertyTypeIri;
}
export declare function NoteEntity(props: NoteEntityProps): React.JSX.Element;
export declare const NoteLinkTemplate: LinkTemplate;
export interface NoteLinkProps extends BasicLinkProps {
    primaryLabelProps?: NoteLinkLabelStyle;
}
type NoteLinkLabelStyle = Omit<LinkLabelProps, 'primary' | 'link' | 'position'> & Partial<Pick<LinkLabelProps, 'position'>>;
export declare function NoteLink(props: NoteLinkProps): React.JSX.Element;
export {};
//# sourceMappingURL=noteAnnotation.d.ts.map