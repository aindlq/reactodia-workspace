import * as React from 'react';
import { type Translation } from '../../coreUtils/i18n';
import { ElementModel } from '../../data/model';
import type { DataDiagramModel } from '../../editor/dataDiagramModel';
export interface ListElementViewProps extends Omit<React.HTMLProps<HTMLElement>, 'onClick'> {
    element: ElementModel;
    className?: string;
    highlightText?: string;
    disabled?: boolean;
    selected?: boolean;
    onClick?: (event: React.MouseEvent<any>, model: ElementModel) => void;
    onDragStart?: React.HTMLProps<HTMLElement>['onDragStart'];
}
export declare function ListElementView(props: ListElementViewProps): React.JSX.Element;
export declare function startDragElements(e: React.DragEvent<unknown>, iris: ReadonlyArray<string>): boolean;
export declare function highlightSubstring(text: string, substring: string | undefined, highlightProps?: React.HTMLProps<HTMLSpanElement>): React.JSX.Element;
export declare function formatEntityTitle(entity: ElementModel, model: DataDiagramModel, t: Translation): string;
//# sourceMappingURL=listElementView.d.ts.map