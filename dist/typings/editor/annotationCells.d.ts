import type { LinkTypeIri } from '../data/model';
import { Element, Link } from '../diagram/elements';
import type { SerializedElement, ElementFromJsonOptions, SerializedLink, LinkFromJsonOptions } from './serializedDiagram';
export declare class AnnotationElement extends Element {
    static readonly fromJSONType = "Annotation";
    static fromJSON(state: SerializedAnnotationElement, options: ElementFromJsonOptions): AnnotationElement | undefined;
    toJSON(): SerializedAnnotationElement;
}
export interface SerializedAnnotationElement extends SerializedElement {
    '@type': 'Annotation';
}
export declare class AnnotationLink extends Link {
    static readonly typeId: LinkTypeIri;
    protected getTypeId(): LinkTypeIri;
    static readonly fromJSONType = "AnnotationLink";
    static fromJSON(state: SerializedAnnotationLink, options: LinkFromJsonOptions): AnnotationLink | undefined;
    toJSON(): SerializedAnnotationLink;
}
export interface SerializedAnnotationLink extends SerializedLink {
    '@type': 'AnnotationLink';
}
//# sourceMappingURL=annotationCells.d.ts.map