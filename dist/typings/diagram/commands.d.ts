import { TranslatedText } from '../coreUtils/i18n';
import type { LinkTypeIri } from '../data/model';
import { TemplateState } from '../data/schema';
import type { CanvasApi } from './canvasApi';
import type { Element, Link, LinkTypeVisibility } from './elements';
import { SizeProvider } from './geometry';
import { Command } from './history';
import type { DiagramModel, GraphStructure } from './model';
export declare class RestoreGeometry implements Command {
    private elementState;
    private linkState;
    private static _title;
    private constructor();
    static capture(graph: GraphStructure): RestoreGeometry;
    static capturePartial(elements: ReadonlyArray<Element>, links: ReadonlyArray<Link>): RestoreGeometry;
    get title(): TranslatedText;
    hasChanges(): boolean;
    filterOutUnchanged(): RestoreGeometry;
    invoke(): RestoreGeometry;
}
export declare function restoreCapturedLinkGeometry(link: Link): Command;
export declare function setElementState(element: Element, state: TemplateState): Command;
export declare function setElementExpanded(element: Element, expanded: boolean): Command;
export declare function setLinkState(link: Link, state: TemplateState): Command;
export declare function changeLinkTypeVisibility(model: DiagramModel, linkTypeId: LinkTypeIri, visibility: LinkTypeVisibility): Command;
export declare function restoreViewport(canvas: CanvasApi): Command;
export declare function placeElementsAroundTarget(params: {
    elements: ReadonlyArray<Element>;
    target: Element;
    graph: GraphStructure;
    sizeProvider: SizeProvider;
    distance?: number;
}): Command;
//# sourceMappingURL=commands.d.ts.map