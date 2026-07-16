import type { AnnotationCommands } from '../widgets/annotation';
import type { ConnectionsMenuCommands } from '../widgets/connectionsMenu';
import type { InstancesSearchCommands } from '../widgets/instancesSearch';
import type { UnifiedSearchCommands } from '../widgets/unifiedSearch';
import type { VisualAuthoringCommands } from '../widgets/visualAuthoring';
export declare class CommandBusTopic<T> {
    private __commandsMarker;
    private constructor();
    static define<T>(): CommandBusTopic<T>;
}
export declare const AnnotationTopic: CommandBusTopic<AnnotationCommands>;
export declare const ConnectionsMenuTopic: CommandBusTopic<ConnectionsMenuCommands>;
export declare const InstancesSearchTopic: CommandBusTopic<InstancesSearchCommands>;
export declare const UnifiedSearchTopic: CommandBusTopic<UnifiedSearchCommands>;
export declare const VisualAuthoringTopic: CommandBusTopic<VisualAuthoringCommands>;
//# sourceMappingURL=commandBusTopic.d.ts.map