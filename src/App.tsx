import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import './App.css';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import PageRoutes from './PageRoute';

const fabSx = {
    position: 'absolute',
    bottom: '37px',
    left: '50%',
    zIndex: 1,
    transform: 'translateX(-50%)',
};

function App() {
    return (
        <div className="App">
            <Header />
            <div className="wrapper">
                <PageRoutes />
            </div>
            <Fab sx={fabSx} color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
            <BottomNav />
        </div>
    );
}

export default App;
