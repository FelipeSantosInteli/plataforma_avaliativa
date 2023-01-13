import React from 'react';

import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Login from '../pages/login/index';
import Home from '../pages/home';
import '../styles/global.css';
import People from '../pages/people';

export function AppRoutes() {
    return (
        <Router>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />}/>
            <Route path='/people' element={<People />}/>
    
        </Routes>
        </Router>
    );
}

