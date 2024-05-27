import React, { useState } from 'react';
import Config from './Config.tsx';
import StoneError from './Error.tsx';
import { User, setterUser } from './App.tsx';

export const tryAuthForm = () => {
    let email = (document.getElementById('email-input') as HTMLInputElement).value || "";
    let password = (document.getElementById('password-input') as HTMLInputElement).value || "";

    tryAuth({ email: email, password: password, login: "" })
};

export const tryAuth = (user: User) => {
    fetch(`${Config.serverBind}/api/user?` + new URLSearchParams({ email: user.email || "", password: user.password, token: user.token || "" }))
    .then(response => response.json())
    .then(data => { if(data['error']) return {}; else return data; })
    .then(data => { setterUser(user); user.token = data.result; if(user.token && user.password.length < 1) return;
        localStorage.setItem('token', data.result); })
    .catch((error) => StoneError.HandleError(error));
}

export const exit = () => {
    localStorage.removeItem('token');
    setterUser({});   
}