import { ElementIri } from '../data/model';
import type { CanvasApi } from '../diagram/canvasApi';
import { EntityElement, EntityGroup } from './dataElements';
import type { WorkspaceContext } from '../workspace/workspaceContext';
export interface GroupEntitiesParams {
    elements: ReadonlyArray<EntityElement>;
    canvas: CanvasApi;
}
export declare function groupEntities(workspace: WorkspaceContext, params: GroupEntitiesParams): Promise<EntityGroup>;
export interface UngroupAllEntitiesParams {
    groups: ReadonlyArray<EntityGroup>;
    canvas: CanvasApi;
}
export declare function ungroupAllEntities(workspace: WorkspaceContext, params: UngroupAllEntitiesParams): Promise<EntityElement[]>;
export interface UngroupSomeEntitiesParams {
    group: EntityGroup;
    entities: ReadonlySet<ElementIri>;
    canvas: CanvasApi;
}
export declare function ungroupSomeEntities(workspace: WorkspaceContext, params: UngroupSomeEntitiesParams): Promise<EntityElement[]>;
//# sourceMappingURL=elementGrouping.d.ts.map