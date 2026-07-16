export type Listener<Data, Key extends keyof Data> = (data: Data[Key]) => void;
export type AnyListener<Data> = (data: Partial<Data>) => void;
export type Unsubscribe = () => void;
export interface PropertyChange<Source, Value> {
    readonly source: Source;
    readonly previous: Value;
}
export interface AnyEvent<Data> {
    readonly data: Partial<Data>;
}
export interface Events<out Data> {
    on<Key extends keyof Data>(eventKey: Key, listener: Listener<Data, Key>): void;
    off<Key extends keyof Data>(eventKey: Key, listener: Listener<Data, Key>): void;
    onAny(listener: AnyListener<Data>): void;
    offAny(listener: AnyListener<Data>): void;
}
export interface EventTrigger<in Data> {
    trigger<Key extends keyof Data>(eventKey: Key, data: Data[Key]): void;
}
export declare class EventSource<Data> implements Events<Data>, EventTrigger<Data> {
    private listeners;
    private anyListeners;
    on<Key extends keyof Data>(eventKey: Key, listener: Listener<Data, Key>): void;
    onAny(listener: AnyListener<Data>): void;
    off<Key extends keyof Data>(eventKey: Key, listener: Listener<Data, Key>): void;
    offAny(listener: AnyListener<Data>): void;
    trigger<Key extends keyof Data>(eventKey: Key, data: Data[Key]): void;
}
export declare class EventObserver {
    private onDispose;
    listen<Data, Key extends keyof Data>(events: Events<Data>, eventKey: Key, listener: Listener<Data, Key>): void;
    listenAny<Data>(events: Events<Data>, listener: AnyListener<Data>): void;
    listenOnce<Data, Key extends keyof Data>(events: Events<Data>, eventKey: Key, listener: Listener<Data, Key>): void;
    stopListening(): void;
}
//# sourceMappingURL=events.d.ts.map