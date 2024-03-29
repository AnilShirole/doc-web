import * as React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { DocumentService } from '../service/DocumentService';
import { DocumentGrid } from './DocumentGrid';
import { DocumentUpload } from './DocumentUpload';

interface DocumentProps {
    documentService: DocumentService
 }

export const Document = (props: DocumentProps): JSX.Element =>{

    const [documents, setDocuments] = useState([]);

    const getDocuments = () => {
        props.documentService.getAllDocuments().then(response => {
            setDocuments(response as any);
        });
    }

    useEffect(()=> {
        getDocuments();
     }, []);


    return (<div>
        <DocumentUpload documentService={ props.documentService } refreshDocs = { getDocuments }></DocumentUpload>
        <DocumentGrid documentService={ props.documentService } documents={ documents }></DocumentGrid>
    </div>);
}