import React from 'react';
import { AppBar, Button, Toolbar, Typography, Container } from '@mui/material';



import './Header.css';


function Header() {
    return (
        
        <AppBar className="app-bar" position="static" sx={{ backgroundColor: '#00284E' }}>
            {/* Remove the Container component */}
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Logo
                </Typography>
                <Button color="inherit">Salir</Button>
            </Toolbar>
        </AppBar>
        
        
    );
}

export default Header;