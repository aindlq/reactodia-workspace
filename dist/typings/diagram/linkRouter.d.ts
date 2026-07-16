import type { LinkRouter, RoutedLinks } from './customization';
import type { GraphStructure } from './model';
import { SizeProvider } from './geometry';
export interface DefaultLinkRouterOptions {
    gap?: number;
}
export declare class DefaultLinkRouter implements LinkRouter {
    private readonly gap;
    constructor(options?: DefaultLinkRouterOptions);
    route(model: GraphStructure, sizeProvider: SizeProvider): RoutedLinks;
    private routeFeedbackSiblingLinks;
    private routeNormalSiblingLinks;
    private getLabelAlignment;
}
//# sourceMappingURL=linkRouter.d.ts.map