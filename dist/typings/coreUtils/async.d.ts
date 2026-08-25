export declare function mapAbortedToNull<T>(promise: Promise<T>, signal: AbortSignal | undefined): Promise<T | null>;
export declare function delay(timeout: number, options?: {
    signal?: AbortSignal;
}): Promise<void>;
export declare class AsyncLock {
    private active;
    acquire(): Promise<AsyncLockToken>;
    private release;
    private activate;
    dispose(): void;
}
export interface AsyncLockToken {
    release(): Promise<void>;
}
//# sourceMappingURL=async.d.ts.map