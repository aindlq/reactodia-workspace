import * as React from 'react';
import { type AnnotationContent } from '../../data/schema';
import { Element, Link } from '../../diagram/elements';
import { Vector } from '../../diagram/geometry';
import { type AnnotationLinkOperation } from './annotationLinkMover';
export interface AnnotationCommands {
    findCapabilities: {
        readonly capabilities: Array<Record<string, never>>;
    };
    startDragOperation: {
        readonly operation: AnnotationLinkOperation;
    };
    createAnnotation: {
        readonly targets: readonly Element[];
        readonly content?: AnnotationContent;
        readonly position?: Vector;
    };
    renameLink: {
        readonly target: Link;
    };
}
export interface AnnotationSupportProps {
}
export declare function AnnotationSupport(props: AnnotationSupportProps): React.JSX.Element;
//# sourceMappingURL=annotationSupport.d.ts.map