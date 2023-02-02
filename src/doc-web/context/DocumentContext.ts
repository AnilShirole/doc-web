import { createContext } from 'react';
import { DocumentService } from '../service/DocumentService';

export class DocumentContext {
    private static instance:DocumentContext;
    public documentService: DocumentService;

    private constructor() {
        this.documentService = DocumentService.getInstance();
    }

    public static getInstance(): DocumentContext {
        if(!DocumentContext.instance) {
            return new DocumentContext();
        }

        return DocumentContext.instance;
    }
}

export const DocumentReactContext = createContext<DocumentContext>({} as DocumentContext);