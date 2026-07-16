import * as React from 'react';
import { type Translation } from '../../coreUtils/i18n';
import type { ElementModel, ElementTypeIri } from '../../data/model';
import type { MetadataCreatedEntity } from '../../data/metadataProvider';
import { SearchInputStore } from '../utility/searchInput';
import { type WorkspaceContext } from '../../workspace/workspaceContext';
export interface ElementTypeSelectorProps {
    source: ElementModel;
    elementValue: ElementValue;
    onChange: (state: Pick<ElementValue, 'value' | 'isNew' | 'loading'>) => void;
}
export interface ElementValue {
    value: MetadataCreatedEntity;
    isNew: boolean;
    loading: boolean;
    error?: string;
    validated: boolean;
    allowChange: boolean;
}
export declare function ElementTypeSelector(props: ElementTypeSelectorProps): React.JSX.Element;
interface ElementTypeSelectorInnerProps extends ElementTypeSelectorProps {
    searchStore: SearchInputStore;
    workspace: WorkspaceContext;
    translation: Translation;
}
interface State {
    elementTypes?: ReadonlyArray<ElementTypeIri>;
    elementTypesState: 'none' | 'loading' | 'error';
    existingElements: ReadonlyArray<ElementModel>;
    existingElementsState: 'none' | 'loading' | 'error';
}
export declare class ElementTypeSelectorInner extends React.Component<ElementTypeSelectorInnerProps, State> {
    private readonly listener;
    private fetchTypesCancellation;
    private filterCancellation;
    private loadingItemCancellation;
    constructor(props: ElementTypeSelectorInnerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private fetchPossibleElementTypes;
    private searchExistingElements;
    private onElementTypeChange;
    private renderElementTypeSelector;
    private renderExistingElementsList;
    private onSelectExistingItem;
    render(): React.JSX.Element;
}
export declare function validateElementType(element: ElementModel, t: Translation): Promise<Pick<ElementValue, 'error' | 'allowChange'>>;
export {};
//# sourceMappingURL=elementTypeSelector.d.ts.map