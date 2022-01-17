
import React from 'react';
import { BrowserRouter,Route,Routes as Rotas } from  'react-router-dom';
//inport das paginas
import Login from './pages/login';

export default function Routes(){
    return (
        <BrowserRouter>
            <Rotas>
                <Route path="/" element={<Login/>}/>
            </Rotas>
        </BrowserRouter>
    );
}