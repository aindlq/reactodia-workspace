import * as React from 'react';
import { type Translation } from '../../coreUtils/i18n';
import { ElementModel, LinkModel, LinkDirection } from '../../data/model';
import { EntityElement, RelationLink } from '../../editor/dataElements';
import { WorkspaceContext } from '../../workspace/workspaceContext';
export interface ExtendedLink {
    base: Omit<LinkModel, 'sourceId' | 'targetId'>;
    source: ElementModel;
    target: ElementModel;
    direction: LinkDirection;
}
export declare function LinkTypeSelector(props: {
    link: ExtendedLink;
    onChange: (link: ExtendedLink) => void;
    disabled?: boolean;
    error?: React.ReactNode | null;
}): React.JSX.Element;
export declare function dataFromExtendedLink(link: ExtendedLink): LinkModel;
export declare function relationFromExtendedLink(link: ExtendedLink, source: EntityElement, target: EntityElement): RelationLink;
export interface ValidatedLink {
    link: ExtendedLink;
    error?: string;
    validated: boolean;
    allowChange: boolean;
}
export declare function validateLinkType(currentLink: LinkModel, originalLink: LinkModel, workspace: WorkspaceContext, t: Translation, signal: AbortSignal | undefined): Promise<Pick<ValidatedLink, 'error' | 'allowChange'>>;
//# sourceMappingURL=linkTypeSelector.d.ts.map