export declare class CircularBuffer {
    private buffer;
    private _length;
    private start;
    private end;
    constructor(initialSize?: number);
    get length(): number;
    ensureFreeCapacity(count: number): void;
    private advanceStart;
    private advanceEnd;
    peekBytes(count?: number): Iterable<Uint8Array>;
    readBytes(count: number): Uint8Array;
    writeBytes(bytes: Uint8Array, count?: number): void;
    readInt32(): number;
    writeInt32(value: number): void;
}
//# sourceMappingURL=circularBuffer.d.ts.map