import * as React from 'react';
import { ElementIri, ElementTypeIri, LinkTypeIri } from '../data/model';
import { DataProviderLookupParams } from '../data/dataProvider';
import { Element } from '../diagram/elements';
import { SearchInputStore } from './utility/searchInput';
export interface InstancesSearchProps {
    className?: string;
    searchStore?: SearchInputStore;
    searchTimeout?: number | 'explicit';
    minSearchTermLength?: number;
    onChangeCriteria?: (criteria: SearchCriteria) => void;
    onAddElements?: (elements: Element[]) => void;
}
export interface InstancesSearchCommands {
    findCapabilities: {
        readonly capabilities: Array<Record<string, never>>;
    };
    setCriteria: {
        readonly criteria: SearchCriteria;
    };
}
export interface SearchCriteria {
    readonly text?: string;
    readonly elementType?: ElementTypeIri;
    readonly refElement?: ElementIri;
    readonly refElementLink?: LinkTypeIri;
    readonly linkDirection?: 'in' | 'out';
}
export declare function InstancesSearch(props: InstancesSearchProps): React.JSX.Element;
export declare function createRequest(criteria: SearchCriteria): DataProviderLookupParams;
//# sourceMappingURL=instancesSearch.d.ts.map