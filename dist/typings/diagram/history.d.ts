import { Events } from '../coreUtils/events';
import type { TranslatedText } from '../coreUtils/i18n';
export interface Command {
    readonly title?: TranslatedText | string;
    invoke(): Command;
}
export type CommandAction = () => Command;
export declare namespace Command {
    function create(title: TranslatedText | string, action: CommandAction): Command;
    function effect(title: TranslatedText | string, body: () => void): Command;
    function compound(title: TranslatedText | string | undefined, commands: ReadonlyArray<Command>): Command;
}
export interface CommandHistoryEvents {
    historyChanged: CommandHistoryChangedEvent;
}
export interface CommandHistoryChangedEvent {
    readonly hasChanges: boolean;
}
export interface CommandHistory {
    readonly events: Events<CommandHistoryEvents>;
    readonly undoStack: ReadonlyArray<Command>;
    readonly redoStack: ReadonlyArray<Command>;
    reset(): void;
    undo(): void;
    redo(): void;
    execute(command: Command): void;
    registerToUndo(command: Command): void;
    startBatch(title?: TranslatedText | string): CommandBatch;
}
export interface CommandBatch {
    readonly history: CommandHistory;
    store(): void;
    discard(options?: {
        revert?: boolean;
    }): void;
}
export declare class InMemoryHistory implements CommandHistory {
    private readonly source;
    readonly events: Events<CommandHistoryEvents>;
    private readonly _undoStack;
    private readonly _redoStack;
    private readonly batches;
    get undoStack(): ReadonlyArray<Command>;
    get redoStack(): ReadonlyArray<Command>;
    private hasChanges;
    reset(): void;
    undo(): void;
    redo(): void;
    execute(command: Command): void;
    registerToUndo(command: Command): void;
    private topBatch;
    startBatch(title?: TranslatedText | string): CommandBatch;
}
//# sourceMappingURL=history.d.ts.map