import * as React from 'react';
import { LabelLanguageSelector, type TranslationBundle, TranslationContext } from '../coreUtils/i18n';
import { MetadataProvider } from '../data/metadataProvider';
import { ValidationProvider } from '../data/validationProvider';
import { TypeStyleResolver, RenameLinkProvider } from '../diagram/customization';
import { CommandHistory } from '../diagram/history';
import { LayoutFunction } from '../diagram/layout';
import { type DialogSettingsProvider } from '../editor/overlayController';
import { WorkspaceContext, WorkspaceEventKey } from './workspaceContext';
export interface WorkspaceProps {
    history?: CommandHistory;
    typeStyleResolver?: TypeStyleResolver;
    dialogSettingsProvider?: DialogSettingsProvider;
    metadataProvider?: MetadataProvider;
    validationProvider?: ValidationProvider;
    renameLinkProvider?: RenameLinkProvider | null;
    translations?: ReadonlyArray<Partial<TranslationBundle>>;
    useDefaultTranslation?: boolean;
    selectLabelLanguage?: LabelLanguageSelector;
    defaultLanguage?: string;
    defaultLayout: LayoutFunction;
    onWorkspaceEvent?: (key: WorkspaceEventKey) => void;
    children: React.ReactNode;
}
export declare class Workspace extends React.Component<WorkspaceProps> {
    private readonly _workspace;
    static contextType: React.Context<import("../workspace").Translation<string> | null>;
    context: React.ContextType<typeof TranslationContext>;
    constructor(props: WorkspaceProps, context: unknown);
    getContext(): WorkspaceContext;
    render(): React.JSX.Element;
}
//# sourceMappingURL=workspaceWrapper.d.ts.map