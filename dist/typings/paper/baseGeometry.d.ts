export interface Vector {
    readonly x: number;
    readonly y: number;
}
export declare namespace Vector {
    function add(a: Vector, b: Vector): Vector;
    function subtract(a: Vector, b: Vector): Vector;
    function scale(v: Vector, factor: number): Vector;
    function equals(a: Vector, b: Vector): boolean;
    function length({ x, y }: Vector): number;
    function normalize({ x, y }: Vector): Vector;
    function dot({ x: x1, y: y1 }: Vector, { x: x2, y: y2 }: Vector): number;
    function cross2D({ x: x1, y: y1 }: Vector, { x: x2, y: y2 }: Vector): number;
}
export interface Size {
    readonly width: number;
    readonly height: number;
}
export interface Rect {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}
export declare namespace Rect {
    function equals(a: Rect, b: Rect): boolean;
    function center({ x, y, width, height }: Rect): Vector;
    function intersects(a: Rect, b: Rect): boolean;
}
export declare function fitRectKeepingAspectRatio(source: Size, targetWidth: number | undefined, targetHeight: number | undefined): Size;
//# sourceMappingURL=baseGeometry.d.ts.map