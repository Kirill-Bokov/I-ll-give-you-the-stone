import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Footer, Header, Items } from '../App.tsx';

export const MainPage = () => {
    return (
    <div>
    <header>
        <Header />
    </header>
    <main className="main-container">
      <div className="main-wrapper">
        <h1 className="visually-hidden">Каталог</h1>
        <img
          src={process.env.PUBLIC_URL + "/img/main-img.jpg"}
          className="hero-img"
          alt="Камень я дам"
          width="1276"
          height="582"
        />
        <div className="hero-container">
          <p className="main-info">
            ПРОВЕРЕНО <span className="main-info-fat">ЭКСПЕРТАМИ</span>
          </p>
          <p className="main-info">
            МИРОВАЯ <span className="main-info-fat">ПРОДУКЦИЯ</span>
          </p>
        </div>
      </div>
      <section className="delivery-info">
        <h2 className="delivery-title">ИНФОРМАЦИЯ О ДОСТАВКЕ</h2>
        <div className="products-container">
            <Items filter="id"/>
        </div>
      </section>
    </main>
    <footer><Footer/></footer>
    <script src={process.env.PUBLIC_URL + "/script.js"}></script>
    </div>
    );
};