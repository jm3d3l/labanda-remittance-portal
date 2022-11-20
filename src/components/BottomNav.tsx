import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationIcon from '@mui/icons-material/MonetizationOn';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { Box, Fab, makeStyles } from '@mui/material';

const style = {
    root: {
        width: '100%',
        display: 'flex',
        position: 'fixed',
        bottom: 0,
    },
};

const routes = [
    {
        label: 'Home',
        icon: <HomeIcon />,
        url: '/',
    },
    {
        label: 'Transaction',
        icon: <MonetizationIcon />,
        url: '/transaction',
    },
];

export default function BottomNav() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            sx={style.root}
        >
            {routes.map(({ label, icon, url }) => (
                <BottomNavigationAction
                    key={label}
                    onClick={() => navigate(url)}
                    label={label}
                    icon={icon}
                />
            ))}
        </BottomNavigation>
    );
}
