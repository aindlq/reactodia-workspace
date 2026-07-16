import type { LinkTypeIri } from './data/model';
import type { TypeStyleResolver, LinkTemplate } from './diagram/customization';
export declare const SemanticTypeStyles: TypeStyleResolver;
export declare function makeLinkStyleShowIri(Reactodia: typeof import('./workspace')): LinkTemplate;
export declare function makeOntologyLinkTemplates(Reactodia: typeof import('./workspace')): (linkType: LinkTypeIri | undefined) => LinkTemplate | undefined;
//# sourceMappingURL=legacy-styles.d.ts.map