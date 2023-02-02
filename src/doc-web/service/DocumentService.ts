import { DocumentDomainModel } from "../model/DocumentDomainModel";
import { DocumentHttpService } from "./DocumentHttpService";

export class DocumentService {
    private static instance:DocumentService;
    private documentHttpService: DocumentHttpService;

    private constructor() {
        this.documentHttpService = DocumentHttpService.getInstance();
    }

    public static getInstance(): DocumentService {
        if(!DocumentService.instance) {
            return new DocumentService();
        }

        return DocumentService.instance;
    }

    public async getAllDocuments(): Promise<DocumentDomainModel[]> {
        return await this.documentHttpService.getAllDocuments();
    }

    public async uploadDocuments(documents: File[], onUploadProgress?: (progressEvent: any) =>void): Promise<DocumentDomainModel[]> {
        return await this.documentHttpService.uploadDocuments(documents, onUploadProgress);
    }

    public async downloadDocument(docWebId: String): Promise<File> {
       return this.documentHttpService.downloadDocument(docWebId);
    }
}