import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/Login';
import AddUser from '../pages/AddUser/index';
import PasswordForgot from '../pages/PasswordForgot/PasswordForgot';

const LoginRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="add" element={<AddUser />} />
                <Route path="password" element={<PasswordForgot />} />
            </Routes>
        </div>
    );
};

export default LoginRoutes;