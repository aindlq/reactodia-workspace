import type { ElementTypeIri, ElementModel } from '../data/model';
import type * as Rdf from '../data/rdf/rdfModel';
export interface FileUploadProvider {
    uploadFile(file: File, options: {
        signal?: AbortSignal;
    }): Promise<UploadedFile>;
    getFileMetadata(fileIri: string): ElementModel | undefined;
    resolveFileUrl(fileIri: string, options: {
        signal?: AbortSignal;
    }): Promise<string | undefined>;
}
export interface UploadedFile {
    readonly iri: string;
    readonly metadata: ElementModel;
}
export declare const FileType: ElementTypeIri;
export interface MemoryUploadedFile extends UploadedFile {
    readonly name: string;
    readonly blob: Blob;
}
export interface MemoryFileUploaderOptions {
    factory: Rdf.DataFactory;
    disposeSignal: AbortSignal;
}
export declare class MemoryFileUploader implements FileUploadProvider {
    private static readonly IRI_PREFIX;
    private readonly factory;
    private readonly disposeSignal;
    private readonly uploadedFiles;
    private readonly objectUrls;
    constructor(options: MemoryFileUploaderOptions);
    files(): Iterable<MemoryUploadedFile>;
    getFileMetadata(fileUrl: string): ElementModel | undefined;
    uploadFile(file: File, options?: {
        signal?: AbortSignal;
    }): Promise<UploadedFile>;
    resolveFileUrl(fileIri: string, options: {
        signal?: AbortSignal;
    }): Promise<string | undefined>;
    private resolveFileUrlSync;
}
//# sourceMappingURL=fileUploadProvider.d.ts.map