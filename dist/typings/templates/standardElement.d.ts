import * as React from 'react';
import { ElementTemplate, TemplateProps } from '../diagram/customization';
export declare const StandardTemplate: ElementTemplate;
export interface StandardEntityProps extends TemplateProps {
    showActions?: boolean;
}
export declare function StandardEntity(props: StandardEntityProps): React.JSX.Element | null;
export interface StandardEntityGroupProps extends TemplateProps {
    groupPageSize?: number;
    groupPageSizes?: ReadonlyArray<number>;
}
export declare function StandardEntityGroup(props: StandardEntityGroupProps): React.JSX.Element | null;
//# sourceMappingURL=standardElement.d.ts.map