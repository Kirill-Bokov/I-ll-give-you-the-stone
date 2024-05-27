import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Footer, Header, Items } from '../App.tsx';
import { tryAuth, tryAuthForm } from '../User.tsx';

export const LoginPage = () => {
    return (
    <div>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + "/styles/login.css"} />
    <header>
        <Header />
    </header>
    <main className="main-container">
      <h1 className="visually-hidden">Профиль пользователя</h1>
      <section className="account-menu">
        <h2 className="visually-hidden">Меню аккаунта пользователя</h2>
        <p className="username">С возвращением</p>
      </section>
      <div className="main-wrapper">
      <div
          className="login-form"
        >
          <div className="login-wrapper">
            <label className="login-label">Логин</label>
            <input
              className="log-input"
              type="email"
              id="email-input"
              name="email"
              required
              minLength={4}
              maxLength={255}
              placeholder="введите email"
            />
          </div>
          <div className="password-wrapper">
            <label className="login-label">Пароль</label>

            <input
              className="log-input"
              type="password"
              id="password-input"
              name="password"
              required
              minLength={4}
              maxLength={255}
              placeholder="введите пароль"
            />
          </div>

          <div className="check-wrapper">
            <input
              className="control-input visually-hidden"
              type="checkbox"
              name="password-save"
              id="pass"
            />
            <label className="control-checkbox">
              запомнить на 30 дней
            </label>
            <a href="#" className="reset-pass">забыли пароль?</a>
          </div>
          <button onClick={tryAuthForm} className="submit-button submit-button-black" type="submit">
            войти
          </button>
          <button className="submit-button" type="button">
            войти через Google
          </button>
          <a href={process.env.PUBLIC_URL + "/register"} className="registration-btn"
            >нет аккаунта? зарегистрироваться</a
          >
          </div>
      </div>
    </main>
    <footer><Footer/></footer>
    <script src={process.env.PUBLIC_URL + "/script.js"}></script>
    </div>
    );
};