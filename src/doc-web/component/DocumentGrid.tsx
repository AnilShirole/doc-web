import * as React from 'react';
import { GridOptions, RowClickedEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { DocumentDomainModel } from '../model/DocumentDomainModel';
import { DocumentService } from '../service/DocumentService';

interface DocumentProps {
    documentService: DocumentService,
    documents: DocumentDomainModel[]
 }

export const DocumentGrid = (props: DocumentProps):JSX.Element => {

    const documentGridOptions: GridOptions = {
        columnDefs: [
            { headerName: 'Doc Web Id', field: 'docWebId' },
            { headerName: 'File Name', field: 'fileName' },
            { headerName: 'File Size', field: 'fileSize' },
            { headerName: 'Last Updated By', field: 'lastUpdatedBy' },
            { headerName: 'Created Date', field: 'createdDate' },
            { headerName: 'Last Updated Date', field: 'lastUpdatedDate' },
            { headerName: 'Description', field: 'description' },
        ]
    };

    const fileDownload = (blob: any, fileName: string) => {
        alert("File getting downloaded..");
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = fileName;
        alink.click();
    }

    const downloadDocument = (rowClickedEvent:RowClickedEvent) => {
        const documentRow = rowClickedEvent.data;
        props.documentService.downloadDocument(documentRow.docWebId).then(file => {
            console.log(file);
            fileDownload(file, "");
        }).catch(error => {
            console.warn(error);
        });
    }

    return (
        <div className= "ag-theme-alpine" style={{
            height: '500px',
            width: '1350px'
        }}>
            <AgGridReact 
                gridOptions={ documentGridOptions }  
                rowData= { props.documents }
                onRowClicked={downloadDocument}>    
            </AgGridReact>
        </div>
    );
}