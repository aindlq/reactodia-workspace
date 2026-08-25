import { Rect, Size, Vector } from '../paper/baseGeometry';
import type { Element, Link } from './elements';
export { Rect, type Size, Vector };
export interface SizeProvider {
    getElementSize(element: Element): Size | undefined;
    getElementShape(element: Element): ShapeGeometry;
}
export declare function boundsOf(element: Element, sizeProvider: SizeProvider): Rect;
export interface ShapeGeometry {
    readonly type: 'rect' | 'ellipse';
    readonly bounds: Rect;
}
export declare function isPolylineEqual(left: ReadonlyArray<Vector>, right: ReadonlyArray<Vector>): boolean;
export declare function computePolyline(source: ShapeGeometry | Rect, target: ShapeGeometry | Rect, vertices: ReadonlyArray<Vector>): Vector[];
export declare function computePolylineLength(polyline: ReadonlyArray<Vector>): number;
export declare function getPointAlongPolyline(polyline: ReadonlyArray<Vector>, offset: number): Vector;
export declare function findNearestSegmentIndex(polyline: ReadonlyArray<Vector>, location: Vector): number;
export interface SplineGeometry {
    readonly type: 'straight' | 'smooth';
    readonly points: ReadonlyArray<Vector>;
    readonly source: Vector;
    readonly target: Vector;
}
export declare class Spline {
    readonly geometry: SplineGeometry;
    private constructor();
    static readonly defaultType: SplineGeometry['type'];
    static create(geometry: SplineGeometry): Spline;
    toPath(): string;
}
export declare function pathFromPolyline(polyline: ReadonlyArray<Vector>): string;
export declare function findElementAtPoint(elements: ReadonlyArray<Element>, point: Vector, sizeProvider: SizeProvider): Element | undefined;
export declare function getContentFittingBox(elements: Iterable<Element>, links: Iterable<Link>, sizeProvider: Pick<SizeProvider, 'getElementSize'>): Rect;
export declare function calculateAveragePosition(elements: ReadonlyArray<Element>, sizeProvider: SizeProvider): Vector;
//# sourceMappingURL=geometry.d.ts.map