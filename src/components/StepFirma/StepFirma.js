import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import './StepFirma.css';


function StepFirma({ onBack, onFirmar }) {
    const [isCompleted, setIsCompleted] = React.useState(false);

    const handleFirmar = () => {
        // Call your API here or handle the data
        // After successful completion:
        setIsCompleted(true);
        onFirmar();
    };

    if (isCompleted) {
        return (
            <Box className="step-firma-completed">
                <CheckCircleOutlineIcon className="check-icon" />
                <Typography variant="h4" color="primary">
                    ¡Felicidades! Hemos concluido la solicitud de devolución de saldo relacionada a AFP CONFÍA. En los próximos XX días estará recibiendo la resolución del beneficio.
                </Typography>
                <Typography>
                    Ahora, para poder gestionar los fondos que cotizaste en el Sistema de Pensiones Público, SPP (ISSS-INPEP)
                </Typography>
                <Button color="default">No</Button>
                <Button variant="contained" color="primary">Si</Button>
            </Box>
        );
    }

    return (
        <Box className="step-firma-container">
            <Typography variant="h4" color="primary">¡Ya casi terminas! Firma la solicitud</Typography>
            <Typography>Firma electrónica de OneSpan Sign</Typography>
            <Box className="toa-box">
                {/* This is the long TOA text you provided */}
                <Typography variant="body2">
                    CONSENTIMIENTO DE FIRMA ELECTRÓNICA AFP CONFIA...
                    {/* The rest of the TOA content goes here */}
                </Typography>
            </Box>
            <Button color="default" onClick={onBack}>Cancelar</Button>
            <Button variant="contained" color="primary" onClick={handleFirmar}>Firmar</Button>
        </Box>
    );
}

export default StepFirma;
