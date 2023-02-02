import React from 'react';
import { createRoot } from 'react-dom/client';

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';

import { DocumentContainer } from './doc-web/component/DocumentContainer';


const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(<DocumentContainer></DocumentContainer>);