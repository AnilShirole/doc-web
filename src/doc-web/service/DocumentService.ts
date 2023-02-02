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

    public async uploadDocuments(): Promise<DocumentDomainModel[]> {
        return await this.documentHttpService.uploadDocuments();
    }
}