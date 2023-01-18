import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import '../styles/global.css';

import Login from '../pages/login/index';
import Home from '../pages/home';
import People from '../pages/people';
import Avaliacoes from '../pages/avaliacoes';
import Avaliadores from '../pages/avaliadores';
import Dashboard from '../pages/dashboard';
import Exportar from '../pages/exportar';


export function AppRoutes() {
    return (
        <Router>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />}/>
            <Route path='/people' element={<People/>}/>
            <Route path='/avaliacoes' element={<Avaliacoes/>}/>
            <Route path='/avaliadores' element={<Avaliadores/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/exportar' element={<Exportar/>}/>
    
        </Routes>
        </Router>
    );
}

