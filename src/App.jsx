import React, {useState} from 'react';
import ErrorBoundary from './ErrorBoundary';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import { Routes, Route} from 'react-router-dom';
import "./styles.css";

function App(){

    const [isDark, setDark] = useState(false);
    const toggleTheme = () => {
        setDark(prev => !prev);
    };
    return (
        <ErrorBoundary>
        <div className={isDark ? 'dark' : 'light'}>
            <Header toggleTheme={toggleTheme} />
            <Routes>
                <Route path="/" element={<ErrorBoundary><Home/></ErrorBoundary>}/>
                <Route path="/about" element={<ErrorBoundary><About/></ErrorBoundary>}/>
                <Route path="/contacts" element={<ErrorBoundary><Contacts/></ErrorBoundary>}/>
            </Routes>
        </div>
        </ErrorBoundary>
    );
}

export default App;