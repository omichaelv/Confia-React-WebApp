import React, { useState } from 'react';
import { Container, Box } from '@mui/material';

import Header from './components/Header/Header';
import InitialScreen from './components/InitialScreen/InitialScreen';
import SentRequierements from './components/SentRequierements/SentRequierements';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import StepFirma from './components/StepFirma/StepFirma';
import StepEncuesta from './components/StepEncuesta/StepEncuesta';

function App() {
    const [currentStep, setCurrentStep] = useState(0); // 0 for the InitialScreen
    const [showSentRequirements, setShowSentRequirements] = useState(false); // To show the SentRequirements screen

    const handleNext = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    const handleExit = () => {
        setCurrentStep(1); // Resetting to the start for now
    };

    const handleFollowUp = () => {
        alert('Follow-up information will be displayed here.');
    };

    const handleSendRequirements = () => {
        setShowSentRequirements(true);
    };

    const handleContinue = () => {
        setShowSentRequirements(false);
        setCurrentStep(1); // Move to Step1
    };

    return (
        <Container style={{ background: 'linear-gradient(#f7f7f7, #d6d6d6)', minHeight: '100vh', padding: 0 }}>
            <Header />
            <Container maxWidth="md"  style={{ background: 'linear-gradient(#f7f7f7, #d6d6d6)', minHeight: '100vh', padding: 0 }}>
                <Box my={4}>
                    {/* Rendering the steps/screens conditionally */}
                    {currentStep === 0 && !showSentRequirements && (
                        <InitialScreen onSendRequirements={handleSendRequirements} onContinue={handleContinue} />
                    )}
                    {showSentRequirements && <SentRequierements />}
                    {currentStep === 1 && !showSentRequirements && <Step1 onNext={handleNext} onBack={handleBack} />}
                    {currentStep === 2 && !showSentRequirements && <Step2 onBack={handleBack} onNext={handleNext} />}
                    {currentStep === 3 && !showSentRequirements && <StepFirma onBack={handleBack} onNext={handleNext} />}
                    {currentStep === 4 && !showSentRequirements && <StepEncuesta onExit={handleExit} onFollowUp={handleFollowUp} />}
                </Box>
            </Container>
            
        </Container>
    );
}

export default App;