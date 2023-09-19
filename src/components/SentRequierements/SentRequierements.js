import React from 'react';
import { Box, Typography } from '@mui/material';

import './SentRequierements.css';

function SentRequirements() {
    // Placeholder for the email, replace with actual logic to fetch user's email
    const email = "ldxxxxxx@hxxxxxx.com";

    return (
        <Box className="sent-requirements-container" display="flex" flexDirection="column" alignItems="center" padding={4}>
            {/* Replace 'yourImageSrc' with your actual image path for a mail icon */}
            <img src="yourImageSrc" alt="Imagen de Correo" className="mail-icon" />

            <Typography paragraph>
                Hemos enviado a tu correo electrónico {email} los requisitos para poder solicitar la devolución de saldo a salvadoreños residentes en el extranjero. Es importante que revises cuidadosamente el documento enviado y sigas todas las instrucciones. Adicionalmente al llenar la solicitud, que tengas todos los requisitos a la mano, de lo contrario, se cancelará el proceso.
            </Typography>
        </Box>
    );
}

export default SentRequirements;
