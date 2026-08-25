import * as React from 'react';
import { type Translation } from '../../coreUtils/i18n';
import { EntityElement, RelationLink } from '../../editor/dataElements';
import { WorkspaceContext } from '../../workspace/workspaceContext';
import { ElementValue } from './elementTypeSelector';
import { ValidatedLink } from './linkTypeSelector';
export interface FindOrCreateEntityFormProps {
    source: EntityElement;
    target: EntityElement;
    initialTargetIsNew: boolean;
    originalLink: RelationLink;
    onAfterApply: () => void;
    onCancel: () => void;
    translation: Translation;
}
interface State {
    elementValue: ElementValue;
    linkValue: ValidatedLink;
    isValidating?: boolean;
}
export declare class FindOrCreateEntityForm extends React.Component<FindOrCreateEntityFormProps, State> {
    static contextType: React.Context<WorkspaceContext | null>;
    readonly context: WorkspaceContext;
    private link;
    private validationCancellation;
    constructor(props: FindOrCreateEntityFormProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private validate;
    render(): React.JSX.Element;
    private setElementOrLink;
    private onApply;
}
export {};
//# sourceMappingURL=findOrCreateEntityForm.d.ts.map