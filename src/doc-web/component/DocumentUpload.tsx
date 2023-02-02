import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FileUpload from "react-material-file-upload";

export const DocumentUpload = ():JSX.Element  => {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        innerHeight: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
  
      const submitFile = () => {

      };
      const [files, setFiles] = useState<File[]>([]);
      
      const allowedFileTypes = [".docx", ".xlsx", ".pdf"];
      const maxFileSize = 1000000;

      return (
        <React.Fragment>
          <Button onClick={ handleOpen }>Upload</Button>
          <Modal
            hideBackdrop
            open={ open}
            onClose={ handleClose }
          >
            <Box sx={ style }>
              <h2>Document Upload Model</h2>
              <FileUpload value={files} onChange={ setFiles }  maxSize={ maxFileSize } accept={ allowedFileTypes } />
              <Button onClick={ handleClose }> Close </Button>
              <Button onClick={ submitFile }> Submit </Button>
            </Box>
          </Modal>
        </React.Fragment>
      );
}