
import React from 'react';
import { BrowserRouter,Route,Routes as Rotas } from  'react-router-dom';
//inport das paginas
import Login from './pages/login';
import Home  from './pages/home';

export default function Routes(){
    return (
        <BrowserRouter>
            <Rotas>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Rotas>
        </BrowserRouter>
    );
}