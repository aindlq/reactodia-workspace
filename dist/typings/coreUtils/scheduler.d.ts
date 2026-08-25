export declare class Debouncer {
    private scheduled;
    private _timeout;
    private callback;
    constructor(timeout?: number | 'frame');
    get timeout(): number | 'frame';
    setTimeout(timeout: number | 'frame'): void;
    call(callback: () => void): void;
    private schedule;
    private run;
    runSynchronously: () => void;
    dispose(): void;
    private cancelScheduledTimeout;
}
export declare class BufferingQueue<Key extends string> {
    private onFetch;
    private readonly debouncer;
    private readonly queuedItems;
    constructor(onFetch: (keys: Key[]) => void, waitingTime?: number);
    has(key: Key): boolean;
    push(key: Key): void;
    clear(): void;
    private run;
}
//# sourceMappingURL=scheduler.d.ts.map