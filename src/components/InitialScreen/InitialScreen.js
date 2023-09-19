import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';


import './InitialScreen.css';
import avatarImage from '../../assets/images/noavatar.png';


function InitialScreen({ onContinue, onSendRequirements }) {
    
    return (
        <Box className="initial-screen" display="flex" flexDirection="column" padding={4} sx={{ backgroundColor: 'transparent' }}>
             <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar  alt="Imagen Descriptiva" src={avatarImage} sx={{ width: 154, height: 154 }}></Avatar>    
             </Box>
             <Box sx={{ display: 'flex', justifyContent: 'center' }} textAlign="center">
                <Typography variant="h2" gutterBottom className="title">
                    Devolución de Saldo a Salvadoreños en el Extranjero
                </Typography>
             </Box>
            
            <Typography paragraph className="subtitle">
                Este beneficio permite retirar el saldo total de la cuenta de ahorro para pensiones y lo que cotizaste en el sistema público (ISSS / INPEP) (Si aplica)
            </Typography>

            <Typography paragraph className="boldText" style={{ fontWeight: 'bold' }}>
                Para aplicar, debes cumplir con las siguientes condiciones
            </Typography>
            <ul>
                <li><Typography>Ser un afiliado salvadoreño no pensionado residente en el extranjero</Typography></li>
                <li><Typography>Poseer estatus migratorio regular permanente</Typography></li>
            </ul>
            <Typography paragraph>
                Es importante que para iniciar tu trámite tengas todos los requisitos a la mano, de lo contrario el proceso se cancelará y tendrás que iniciar nuevamente.
            </Typography>
            
            <Box className="button-container" marginTop={4}>
                <Button
                    variant="outlined"
                    className="send-requirements-button"
                    onClick={onSendRequirements}
                    sx={{ borderRadius: '40px', padding: '20px 24px' }} 
                >
                    Enviarme los requisitos
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className="continue-button"
                    onClick={onContinue}
                    sx={{ borderRadius: '40px' , padding: '20px 24px'}} 
                >
                    Continuar con el trámite
                </Button>
            </Box>
        </Box>
    );
}

export default InitialScreen;
