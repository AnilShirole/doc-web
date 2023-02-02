import * as React from 'react';
import { GridOptions } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { DocumentDomainModel } from '../model/DocumentDomainModel';

interface DocumentProps {
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

    return (
        <div className= "ag-theme-alpine" style={{
            height: '500px',
            width: '1350px'
        }}>
            <AgGridReact gridOptions={ documentGridOptions }  rowData= { props.documents }></AgGridReact>
        </div>
    );
}