export declare class Sha256 {
    private initialized;
    private _padding;
    private _k;
    private initialize;
    create(): Sha256Digest;
}
export interface HashDigest {
    start(): void;
    update(bytes: Uint8Array): void;
    digest(): Uint8Array;
}
declare class Sha256Digest implements HashDigest {
    private readonly _padding;
    private readonly _k;
    readonly blockLength = 64;
    readonly digestLength = 32;
    private messageLength;
    private messageLength64;
    private _state;
    private _input;
    private _w;
    constructor(_padding: Uint8Array, _k: Uint32Array);
    start(): void;
    update(bytes: Uint8Array): void;
    digest(): Uint8Array;
}
export {};
//# sourceMappingURL=sha256.d.ts.map