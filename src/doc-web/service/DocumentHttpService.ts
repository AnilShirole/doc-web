import axios from "axios";
import { DocumentDomainModel } from "../model/DocumentDomainModel";

export class DocumentHttpService {
    private static instance:DocumentHttpService;

    private constructor() {
    }

    public static getInstance(): DocumentHttpService {
        if(!DocumentHttpService.instance) {
            return new DocumentHttpService();
        }

        return DocumentHttpService.instance;
    }

    public async getAllDocuments(): Promise<DocumentDomainModel[]> {
        const response = await axios.get('http://localhost:3002/api/document');
        return response.data;
    }

    public async uploadDocuments(documents: File[], onUploadProgress?: (progressEvent: any) =>void ): Promise<DocumentDomainModel[]> {
        const data = new FormData();
        documents.forEach(document => {
            data.append('file', document);
        });
        const response = await axios.post(
            'http://localhost:3002/api/document',
            data,
            {
                onUploadProgress: onUploadProgress
            }
        );
        return response.data;
    }
}