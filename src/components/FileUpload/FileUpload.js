import React from 'react';
import { Button, Paper, Typography, IconButton } from '@mui/material';
import UploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

import './FileUpload.css'; 

function FileUpload({ label, onFileChange, file, onFileRemove }) {
    return (
        <Paper elevation={3} className="file-upload-container">
            <Typography className="file-label">{label}</Typography>
            {!file ? (
                <Button component="label" className="upload-button">
                    <UploadIcon />
                    <input type="file" hidden onChange={onFileChange} />
                </Button>
            ) : (
                <div className="file-info">
                    <CheckCircleIcon color="primary" />
                    <Typography variant="body2" className="file-details">{file.name} | {Math.round(file.size / 1024 / 1024)} MB</Typography>
                    <IconButton onClick={onFileRemove} className="remove-icon">
                        <CloseIcon color="secondary" />
                    </IconButton>
                </div>
            )}
        </Paper>
    );
}

export default FileUpload;
