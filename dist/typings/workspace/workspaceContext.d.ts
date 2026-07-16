import * as React from 'react';
import type { Events, EventTrigger } from '../coreUtils/events';
import type { Translation } from '../coreUtils/i18n';
import type { ElementTypeIri } from '../data/model';
import type { CanvasApi } from '../diagram/canvasApi';
import type { TypeStyle } from '../diagram/customization';
import type { Element } from '../diagram/elements';
import type { LayoutFunction } from '../diagram/layout';
import type { SharedCanvasState } from '../diagram/sharedCanvasState';
import type { DataDiagramModel } from '../editor/dataDiagramModel';
import type { EntityElement, EntityGroup } from '../editor/dataElements';
import type { EditorController } from '../editor/editorController';
import type { GroupEntitiesParams, UngroupAllEntitiesParams, UngroupSomeEntitiesParams } from '../editor/elementGrouping';
import type { OverlayController } from '../editor/overlayController';
import type { CommandBusTopic } from './commandBusTopic';
export interface WorkspaceContext {
    readonly model: DataDiagramModel;
    readonly view: SharedCanvasState;
    readonly editor: EditorController;
    readonly overlay: OverlayController;
    readonly translation: Translation;
    readonly disposeSignal: AbortSignal;
    readonly getCommandBus: <T>(definition: CommandBusTopic<T>) => Events<T> & EventTrigger<T>;
    readonly getElementStyle: (element: Element) => ProcessedTypeStyle;
    readonly getElementTypeStyle: (types: ReadonlyArray<ElementTypeIri>) => ProcessedTypeStyle;
    readonly performLayout: (params: WorkspacePerformLayoutParams) => Promise<void>;
    readonly group: (params: GroupEntitiesParams) => Promise<EntityGroup>;
    readonly ungroupAll: (params: UngroupAllEntitiesParams) => Promise<EntityElement[]>;
    readonly ungroupSome: (params: UngroupSomeEntitiesParams) => Promise<EntityElement[]>;
    readonly triggerWorkspaceEvent: (key: WorkspaceEventKey) => void;
}
export interface WorkspacePerformLayoutParams {
    canvas?: CanvasApi;
    layoutFunction?: LayoutFunction;
    selectedElements?: ReadonlySet<Element>;
    fixedElements?: ReadonlySet<Element>;
    animate?: boolean;
    zoomToFit?: boolean;
    signal?: AbortSignal;
}
export declare enum WorkspaceEventKey {
    searchUpdateCriteria = "search:updateCriteria",
    searchQueryItem = "search:queryItems",
    connectionsLoadLinks = "connections:loadLinks",
    connectionsExpandLink = "connections:expandLink",
    connectionsLoadElements = "connections:loadElements",
    editorChangeSelection = "editor:changeSelection",
    editorToggleDialog = "editor:toggleDialog",
    editorAddElements = "editor:addElements"
}
export interface ProcessedTypeStyle extends Omit<TypeStyle, 'color'> {
    readonly color: string;
}
export declare const WorkspaceContext: React.Context<WorkspaceContext | null>;
export declare function useWorkspace(): WorkspaceContext;
//# sourceMappingURL=workspaceContext.d.ts.map