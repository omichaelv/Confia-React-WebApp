import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

import './PaymentModal.css';

function PaymentModal({ open, onClose }) {
    return (
        <Modal open={open} onClose={onClose}>
            <Box className="modal-container">
                <Typography variant="h6" gutterBottom>
                    Error en la validación
                </Typography>
                <Typography variant="body2" paragraph>
                    Por favor, verifica los campos y asegúrate de que todo esté correcto antes de continuar.
                </Typography>
                <Button variant="contained" color="primary" onClick={onClose}>
                    Entendido
                </Button>
            </Box>
        </Modal>
    );
}

export default PaymentModal;
