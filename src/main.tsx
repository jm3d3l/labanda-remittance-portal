import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from '@mui/material';
import { themeOptions } from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={themeOptions}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
