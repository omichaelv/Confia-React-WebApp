import React, { useState } from 'react';
import { Box, Paper, Typography, Radio, RadioGroup, FormControlLabel, Button, TextField, Select, MenuItem, FormControl } from '@mui/material';
import PaymentModal from '../PaymentModal/PaymentModal';

import './Step2.css';

function Step2({ onBack, onNext }) {
    const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
    const [bank, setBank] = useState("");
    const [accountType, setAccountType] = useState("");
    const [accountNo, setAccountNo] = useState("");
    const [confirmAccountNo, setConfirmAccountNo] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const handlePaymentOptionChange = (event) => {
        setSelectedPaymentOption(event.target.value);
    };

    const handleBankChange = (event) => {
        setBank(event.target.value);
    };

    const validateFields = () => {
        if (selectedPaymentOption === 'bankTransfer' && bank && accountType && accountNo === confirmAccountNo) {
            return true;
        }
        // Add other validations for different payment options
        return false;
    };

    return (
        <Box className="step2-container">
            <Typography variant="h4" color="primary" sx={{
                marginBottom: '20px',
                fontWeight: 700 
            }}>Selecciona la forma de pago para la devolución de tu saldo</Typography>

            <RadioGroup value={selectedPaymentOption} onChange={handlePaymentOptionChange}>
                <Paper elevation={3} className="payment-option">
                    <FormControlLabel value="bankTransfer" control={<Radio color="primary" />} label={
                        <Box style={{ width: '100%' }}>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>Abono a Cuenta Bancaria Internacional</Typography>
                            <Typography variant="body2">5 a 15 días hábiles a partir de la firma de la resolución de otorgamiento del beneficio</Typography>
                        </Box>
                    } />
                </Paper>
                <Paper elevation={3} className="payment-option">
                    <FormControlLabel value="cheque" control={<Radio color="primary" />} label={
                        <Box style={{ width: '100%' }}>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>Pago con Cheque Local</Typography>
                            <Typography variant="body2">30 días hábiles de pago</Typography>
                        </Box>
                    } />
                </Paper>
                <Paper elevation={3} className="payment-option">
                    <FormControlLabel value="localBankTransfer" control={<Radio color="primary" />} label={
                        <Box style={{ width: '100%' }}>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>Abono a Cuenta Bancaria Local</Typography>
                            <Typography variant="body2">3 a 10 días hábiles después de la aprobación</Typography>
                        </Box>
                    } />
                </Paper>
            </RadioGroup>

            {selectedPaymentOption === "bankTransfer" && (
                <Box>
                    <FormControl fullWidth margin="normal">
                        <Typography>Selecciona el Banco</Typography>
                        <Select value={bank} onChange={handleBankChange}>
                            <MenuItem value="bank1">Bank 1</MenuItem>
                            <MenuItem value="bank2">Bank 2</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth margin="normal">
                        <Typography>Selecciona tipo de cuenta</Typography>
                        <Select value={accountType} onChange={(e) => setAccountType(e.target.value)}>
                            <MenuItem value="saving">Saving</MenuItem>
                            <MenuItem value="current">Current</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField fullWidth margin="normal" label="No. de Cuenta" value={accountNo} onChange={(e) => setAccountNo(e.target.value)} />
                    <TextField fullWidth margin="normal" label="Confirma tu No. de Cuenta" value={confirmAccountNo} onChange={(e) => setConfirmAccountNo(e.target.value)} />
                </Box>
            )}

            {/* Add conditions and controllers for other payment options */}
            
            <Box mt={4} className="button-container">
                <Button onClick={onBack}>Regresar</Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => {
                        if (validateFields()) {
                            onNext();
                        } else {
                            setModalOpen(true);
                        }
                    }}
                >
                    Continuar
                </Button>
            </Box>

            <PaymentModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </Box>
    );
}

export default Step2;
