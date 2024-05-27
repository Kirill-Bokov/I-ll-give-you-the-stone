import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Footer, Header, Items } from '../App.tsx';

export const CategoryPage = () => {
    let { categoryId } = useParams();

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
      </div>
      <section className="delivery-info">
        <h2 className="delivery-title">КАТАЛОГ</h2>
        <div className="products-container">
            <Items filter="cost" asc={true} category={Number(categoryId)}/>
        </div>
      </section>
    </main>
    <footer><Footer/></footer>
    <script src={process.env.PUBLIC_URL + "/script.js"}></script>
    </div>
    );
};