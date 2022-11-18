import { useState } from 'react';
import './App.css';
import BottomNav from './components/BottomNav';
import PageRoutes from './PageRoute';

function App() {
    return (
        <div className="App">
            <PageRoutes />
            <BottomNav />
        </div>
    );
}

export default App;
