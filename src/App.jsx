import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import { Routes, Route} from 'react-router-dom';
import "./styles.css";

function App(){
    return <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    </div>
}

export default App;