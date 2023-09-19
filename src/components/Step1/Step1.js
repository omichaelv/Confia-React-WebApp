import React, { useState } from 'react';
import FileUpload from '../FileUpload/FileUpload';
import { Box, Button, Typography } from '@mui/material';

import './Step1.css';


function Step1({ onBack, onNext }) {
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);

    const handleFileChange1 = (event) => {
        const selectedFile = event.target.files[0];
    
        // Check if a file was selected
        if (!selectedFile) {
            return;
        }
    
        // Check the file type
        const acceptedTypes = [".pdf", ".jpg", ".jpeg", ".zip", ".png"];
        const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
    
        if (!acceptedTypes.includes(`.${fileExtension}`)) {
            // File type is not accepted, show an error message
            alert("Tipo de archivo no válido. Por favor, seleccione un archivo válido.");
            // Clear the input field
            event.target.value = "";
            return;
        }

        // Check the file size
        const maxSizeInBytes = 100 * 1024 * 1024; // 100 MB
        if (selectedFile.size > maxSizeInBytes) {
            // File size exceeds the limit, show an error message
            alert("El tamaño del archivo excede el límite de 100 MB. Por favor, seleccione un archivo más pequeño.");
            // Clear the input field
            event.target.value = "";
            return;
        }

        // If the file type and size are valid, handle the file
        setFile1(selectedFile);
        
    };

    const handleFileChange2 = (event) => {
        setFile2(event.target.files[0]);
    };

    return (
        <Box className="step1-container" sx={{ backgroundColor: 'transparent' }}>
            <Typography  variant="h4" color="primary" className='step1-title' sx={{
                marginBottom: '20px',
                fontWeight: 700 
            }}>Adjunta los documentos que certifican tu residencia migratoria permanente</Typography>
            <Typography sx={{
                marginBottom: '20px'
            }}> Tipo de Archivo: PDF, JPG, ZIP, PNG. Máx. 100 MB</Typography>
            <FileUpload 
                label="Documento que demuestre estatus migratorio regular permanente (Pasaporte Extranjero, Carnet de Residencia)"
                onFileChange={handleFileChange1}
                file={file1}
                onFileRemove={() => setFile1(null)}
                accept=".pdf, .jpg, .jpeg, .zip, .png"
                
            />
            <FileUpload 
                label="Documento emitidos y certificados por Sede Consular o mediante un notario legalmente autorizado)."
                onFileChange={handleFileChange2}
                file={file2}
                onFileRemove={() => setFile2(null)}
                accept=".pdf, .jpg, .jpeg, .zip, .png"
            />

            <Box className="button-container" marginTop={4}>
                <Button
                    variant="outlined"
                    className="send-requirements-button"
                    onClick={onBack}
                    sx={{ borderRadius: '40px', padding: '20px 24px' }} 
                >
                    Regresar
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className="continue-button"
                    disabled={!file1 || !file2} 
                    onClick={onNext}
                    sx={{ borderRadius: '40px' , padding: '20px 24px'}} 
                >
                    Continuar
                </Button>
            </Box>
           
        </Box>
    );
}

export default Step1;
