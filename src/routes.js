
import React from 'react';
import { BrowserRouter,Route,Routes as Rotas } from  'react-router-dom';
//inport das paginas
import Login from './pages/login';
import Home  from './pages/home';
import Profile from './pages/profile';

export default function Routes(){
    return (
        <BrowserRouter>
            <Rotas>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Rotas>
        </BrowserRouter>
    );
}