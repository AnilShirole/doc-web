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
}