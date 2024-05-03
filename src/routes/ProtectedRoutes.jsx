import React, { Children } from 'react';
import Routering from './routers';
import UserServices from '../services/UserService';

const UserService = new UserServices();

const ProtectedRouters = ({ children }) => {
    const usuarioAutenticado = UserService.usuarioAutenticado();
    return usuarioAutenticado ? children : <Routering />;
}

export default ProtectedRouters;