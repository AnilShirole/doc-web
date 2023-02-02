import * as React from 'react';
import { DocumentContext, DocumentReactContext } from '../context/DocumentContext';
import { Document } from './Document';

export const DocumentContainer = (): JSX.Element =>{
    const documentContext = DocumentContext.getInstance();

    return (
        <DocumentReactContext.Provider value={ documentContext }>
            <Document documentService = { documentContext.documentService }></Document>
        </DocumentReactContext.Provider>
    );
}