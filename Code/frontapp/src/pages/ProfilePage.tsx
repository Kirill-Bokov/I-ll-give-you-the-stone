import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Footer, Header, Items } from '../App.tsx';
import { exit } from '../User.tsx';

export const ProfilePage = () => {
    return (
    <div>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + "/styles/profile.css"} />
    <header>
        <Header />
    </header>
    <main className="main-container">
      <h1 className="visually-hidden">Профиль пользователя</h1>
      <section className="account-menu">
        <h2 className="visually-hidden">Меню аккаунта пользователя</h2>
        <p className="username">Иванов Иван Иванович</p>
        <div className="account-control">
          <a className="change-btn account-control-btn" href="#">Изменить</a>
          <a className="leave-btn account-control-btn" onClick={exit} href="./"
            >Выйти</a>
        </div>
      </section>

      <section className="orders">
        <div className="active-orders">
          <div className="orders-description">
            <h2 className="orders-info">Активные заказы</h2>
          </div>
          <div className="orders-grid">
            <svg
              className="orders-nav orders-nav-left"
              width="34"
              height="30"
              viewBox="0 0 34 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.585785 13.5858C-0.195263 14.3668 -0.195263 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585785 13.5858ZM34 13L2 13V17L34 17V13Z"
                fill="black"
              />
            </svg>
            <div className="carousel-list">
              <ul className="orders-list order-active">
                <li className="order">
                  <img
                    src="./img/actinolite.png"
                    width="156"
                    height="105"
                  />
                  <p className="name-order">Актинолит</p>
                  <span className="numb-order">6630</span>
                  <span className="delivery-info">Доставляется</span>
                </li>
                <li className="order">
                  <img
                    src="./img/actinolite.png"
                    width="156"
                    height="105"
                  />
                  <p className="name-order">Актинолит</p>
                  <span className="numb-order">6630</span>
                  <span className="delivery-info">Собирается</span>
                </li>
                <li className="order">
                  <img
                    src="./img/actinolite.png"
                    width="156"
                    height="105"
                  />
                  <p className="name-order">Актинолит</p>
                  <span className="numb-order">6630</span>
                  <span className="delivery-info">Не оплачен</span>
                </li>
                <li className="order">
                  <img
                    src="./img/actinolite.png"
                    width="156"
                    height="105"
                  />
                  <p className="name-order">Актинолит</p>
                  <span className="numb-order">6630</span>
                  <span className="delivery-info">Не доставляется</span>
                </li>
                <li className="order"></li>
                <li className="order"></li>
                <li className="order"></li>
                <li className="order swafford">
                  <img
                    src="./img/swafford.jpeg"
                    className="swafford-img"
                  />
                </li>
              </ul>
            </div>
            <svg
              className="orders-nav orders-nav-right"
              width="34"
              height="30"
              viewBox="0 0 34 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.4142 16.4142C34.1953 15.6332 34.1953 14.3668 33.4142 13.5858L20.6863 0.857866C19.9052 0.0768173 18.6389 0.0768172 17.8579 0.857866C17.0768 1.63891 17.0768 2.90524 17.8579 3.68629L29.1716 15L17.8579 26.3137C17.0768 27.0948 17.0768 28.3611 17.8579 29.1421C18.6389 29.9232 19.9052 29.9232 20.6863 29.1421L33.4142 16.4142ZM-1.74846e-07 17L32 17L32 13L1.74846e-07 13L-1.74846e-07 17Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <div className="archive-orders">
          <div className="orders-description">
            <h2 className="orders-info">Архив заказов</h2>
          </div>
          <div className="orders-grid">
            <svg
              className="orders-nav orders-nav-left archive-nav-left"
              width="34"
              height="30"
              viewBox="0 0 34 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.585785 13.5858C-0.195263 14.3668 -0.195263 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585785 13.5858ZM34 13L2 13V17L34 17V13Z"
                fill="black"
              />
            </svg>
            <div className="carousel-list">
              <ul className="orders-list order-archive">
                <li className="order">
                  <img
                    src="./img/actinolite.png"
                    width="156"
                    height="105"
                  />
                  <p className="name-order">Актинолит</p>
                  <span className="numb-order">6630</span>
                  <span className="delivery-info">24.03.2024</span>
                </li>
                <li className="order">
                  <img
                    src="./img/actinolite.png"
                    width="156"
                    height="105"
                  />
                  <p className="name-order">Актинолит</p>
                  <span className="numb-order">6630</span>
                  <span className="delivery-info">19.04.2024</span>
                </li>
                <li className="order">
                  <img
                    src="./img/actinolite.png"
                    width="156"
                    height="105"
                  />
                  <p className="name-order">Актинолит</p>
                  <span className="numb-order">6630</span>
                  <span className="delivery-info">20.04.2024</span>
                </li>
                <li className="order">
                  <img
                    src="./img/actinolite.png"
                    width="156"
                    height="105"
                  />
                  <p className="name-order">Актинолит</p>
                  <span className="numb-order">6630</span>
                  <span className="delivery-info">01.05.2024</span>
                </li>
                <li className="order">
                  <img
                    src="./img/actinolite.png"
                    width="156"
                    height="105"
                  />
                  <p className="name-order">Актинолит</p>
                  <span className="numb-order">6630</span>
                  <span className="delivery-info">02.05.2024</span>
                </li>
                <li className="order">
                  <img
                    src="./img/actinolite.png"
                    width="156"
                    height="105"
                  />
                  <p className="name-order">Актинолит</p>
                  <span className="numb-order">6630</span>
                  <span className="delivery-info">05.05.2024</span>
                </li>
                <li className="order">
                  <img
                    src="./img/actinolite.png"
                    width="156"
                    height="105"
                  />
                  <p className="name-order">Актинолит</p>
                  <span className="numb-order">6630</span>
                  <span className="delivery-info">18.07.2025</span>
                </li>
                <li className="order swafford">
                  <img
                    src="./img/swafford.jpeg"
                    className="swafford-img"
                  />
                </li>
              </ul>
            </div>
            <svg
              className="orders-nav orders-nav-right archive-nav-right"
              width="34"
              height="30"
              viewBox="0 0 34 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.4142 16.4142C34.1953 15.6332 34.1953 14.3668 33.4142 13.5858L20.6863 0.857866C19.9052 0.0768173 18.6389 0.0768172 17.8579 0.857866C17.0768 1.63891 17.0768 2.90524 17.8579 3.68629L29.1716 15L17.8579 26.3137C17.0768 27.0948 17.0768 28.3611 17.8579 29.1421C18.6389 29.9232 19.9052 29.9232 20.6863 29.1421L33.4142 16.4142ZM-1.74846e-07 17L32 17L32 13L1.74846e-07 13L-1.74846e-07 17Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </section>
      <div className="general">
        <p className="general-description">Общее</p>
        <div className="link-container">
          <a className="support-link general-link" href="#">Поддержка</a>
          <a className="promocode-link general-link" href="#">Мои промокоды</a>
        </div>
      </div>
    </main>
    <footer><Footer/></footer>
    <script src={process.env.PUBLIC_URL + "/script.js"}></script>
    </div>
    );
};