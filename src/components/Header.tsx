import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/CircleNotifications';
import logo from '../assets/images/labanda-store-logo.png';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box component={'img'} src={logo} height={45} />
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
