import * as React from 'react';
import type { ElementIri, ElementModel } from '../../data/model';
import type { FileUploadProvider } from '../fileUploadProvider';
import type { InputMultiProps } from './inputCommon';
export interface InputFileProps extends InputMultiProps {
    uploader: FileUploadProvider;
    fileAccept?: string;
    allowDrop?: (item: DataTransferItem) => boolean;
    fileMetadata?: ReadonlyMap<ElementIri, ElementModel>;
    getFileCategory?: (fileIri: string, metadata: ElementModel | undefined) => InputFileCategory;
}
export type InputFileCategory = 'default' | 'image';
export declare function InputFile(props: InputFileProps): React.JSX.Element;
export declare function defaultFileCategory(url: string, metadata?: ElementModel): InputFileCategory;
//# sourceMappingURL=inputFile.d.ts.map