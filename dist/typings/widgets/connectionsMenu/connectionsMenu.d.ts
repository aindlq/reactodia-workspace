import { Element } from '../../diagram/elements';
import { PropertySuggestionHandler } from './menuCommon';
export interface ConnectionsMenuProps {
    openAllByDefault?: boolean;
    suggestProperties?: PropertySuggestionHandler;
}
export interface ConnectionsMenuCommands {
    findCapabilities: {
        readonly capabilities: Array<Record<string, never>>;
    };
    show: {
        readonly targets: ReadonlyArray<Element>;
        readonly openAll?: boolean;
    };
}
export declare function ConnectionsMenu(props: ConnectionsMenuProps): null;
//# sourceMappingURL=connectionsMenu.d.ts.map