import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import './StepEncuesta.css';

function StepEncuesta({ onExit, onFollowUp }) {
    const [selectedFace, setSelectedFace] = useState(null);

    return (
        <Box className="step-encuesta-container">
            <Typography variant="h4" color="primary">¿Qué tan fácil fue para ti hacer este proceso?</Typography>
            
            <Box className="emoji-container">
                <SentimentVeryDissatisfiedIcon 
                    fontSize="large" 
                    className={`emoji-icon ${selectedFace === 'sad' ? 'selected' : ''}`} 
                    onClick={() => setSelectedFace('sad')}
                />
                <SentimentDissatisfiedIcon 
                    fontSize="large" 
                    className={`emoji-icon ${selectedFace === 'neutral' ? 'selected' : ''}`} 
                    onClick={() => setSelectedFace('neutral')}
                />
                <SentimentVerySatisfiedIcon 
                    fontSize="large" 
                    className={`emoji-icon ${selectedFace === 'happy' ? 'selected' : ''}`} 
                    onClick={() => setSelectedFace('happy')}
                />
            </Box>

            <Button color="default" onClick={onExit}>Salir</Button>
            <Button variant="contained" color="primary" onClick={onFollowUp}>Dar Seguimiento</Button>
        </Box>
    );
}

export default StepEncuesta;
