import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useParams, useRoutes } from 'react-router-dom';
import Config from './Config.tsx';
import StoneError from './Error.tsx';
import { MainPage } from './pages/MainPage.tsx';
import { ProfilePage } from './pages/ProfilePage.tsx';
import { CategoryPage } from './pages/CategoryPage.tsx';
import { LoginPage } from './pages/LoginPage.tsx';
import { tryAuth } from './User.tsx';

interface Item {
    id?: number,
    name: string,
    cost: number,
    description: string,
    count: number
}

interface Category {
    id?: number,
    name: string,
    description: string,
    parent?: number,
    level?: number
}

export interface User {
    id?: number,
    login: string,
    password: string,
    token?: string,
    email?: string
}


export let setterUser;

export const App = () => {
    const [user, setUser] = useState<User>();
    setterUser = setUser;

    useEffect(() => {
    if(localStorage.getItem('token'))
        tryAuth({login: "", password: "", token: String(localStorage.getItem('token')), email: ""})
}, []);

    let element = useRoutes([
        {
            path: "/category/:categoryId",
            element: <CategoryPage />,
        },
        {
            path: "/profile",
            element: user && user.token ? <ProfilePage /> : <LoginPage/>,
        },
        {
          path: "*",
          element: <MainPage />,
        },
      ]);

    return element;
};

export const Footer = () => {
    return (
    <div>
      <section className="footer-container">
        <div className="contact-wrapper">
          <h3>КАМЕНЬ Я ДАМ</h3>
          <div className="footer-info-container">
            <div className="footer-navigation">
              <a href="#">каталог</a>
              <a href="#">корзина</a>
              <a className="profile-nav" href={process.env.PUBLIC_URL + "/profile"}>профиль</a>
            </div>
            <div className="contact-info">
              <span className="work-hours">пн-пт 10:00 - 20:00 </span>
              <span>сб-вс 10:00 - 16:00</span>
              <span className="tel-support">
                поддержка:
                <a className="footer-contacts-phone" href="tel:+79015623244">
                  +7 901 562 32 44
                </a>
              </span>
              <span>
                администрация:
                <a className="footer-contacts-phone" href="tel:+79223886647">
                  +7 922 388 66 47
                </a>
              </span>
              <span>
                сотрудничество:
                <a className="footer-contacts-phone" href="tel:+79812651300">
                  +7 981 265 13 00
                </a>
              </span>
            </div>
          </div>
          <a className="mail" href="mailto:kamenyadam@mail.ru"
            >kamenyadam@mail.ru</a
          >

          <div className="social-container">
            <a href="#">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.0228 0.867902C21.3112 0.755724 21.6268 0.717034 21.9368 0.75586C22.2468 0.794686 22.5399 0.909607 22.7855 1.08866C23.0312 1.26772 23.2205 1.50436 23.3336 1.77397C23.4467 2.04357 23.4796 2.33627 23.4288 2.62161L20.7824 17.4591C20.5257 18.8903 18.8268 19.7111 17.4068 18.9982C16.2189 18.4017 14.4547 17.4828 12.8678 16.524C12.0743 16.0441 9.6438 14.5071 9.94251 13.4135C10.1992 12.4784 14.2832 8.96451 16.6168 6.87537C17.5328 6.05461 17.1151 5.58113 16.0334 6.3361C13.3473 8.21061 9.03471 11.0612 7.60883 11.8636C6.35098 12.5711 5.69521 12.6919 4.9111 12.5711C3.48055 12.3511 2.15386 12.0103 1.07103 11.5951C-0.392189 11.0342 -0.321012 9.17482 1.06986 8.6334L21.0228 0.867902Z"
                  fill="black"
                />
              </svg>
            </a>

            <a href="#">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.04702 0H14.3578C17.5239 0 20.0963 2.6 20.0963 5.8V14.2C20.0963 15.7383 19.4917 17.2135 18.4155 18.3012C17.3394 19.3889 15.8798 20 14.3578 20H6.04702C2.88099 20 0.308594 17.4 0.308594 14.2V5.8C0.308594 4.26174 0.913176 2.78649 1.98934 1.69878C3.0655 0.61107 4.52509 0 6.04702 0ZM5.84914 2C4.9045 2 3.99855 2.37928 3.33058 3.05442C2.66262 3.72955 2.28736 4.64522 2.28736 5.6V14.4C2.28736 16.39 3.88027 18 5.84914 18H14.5557C15.5004 18 16.4063 17.6207 17.0743 16.9456C17.7422 16.2705 18.1175 15.3548 18.1175 14.4V5.6C18.1175 3.61 16.5246 2 14.5557 2H5.84914ZM15.3967 3.5C15.7247 3.5 16.0393 3.6317 16.2712 3.86612C16.5031 4.10054 16.6334 4.41848 16.6334 4.75C16.6334 5.08152 16.5031 5.39946 16.2712 5.63388C16.0393 5.8683 15.7247 6 15.3967 6C15.0687 6 14.7541 5.8683 14.5222 5.63388C14.2903 5.39946 14.16 5.08152 14.16 4.75C14.16 4.41848 14.2903 4.10054 14.5222 3.86612C14.7541 3.6317 15.0687 3.5 15.3967 3.5ZM10.2024 5C11.5144 5 12.7727 5.52678 13.7004 6.46447C14.6282 7.40215 15.1493 8.67392 15.1493 10C15.1493 11.3261 14.6282 12.5979 13.7004 13.5355C12.7727 14.4732 11.5144 15 10.2024 15C8.89042 15 7.63216 14.4732 6.70443 13.5355C5.7767 12.5979 5.25551 11.3261 5.25551 10C5.25551 8.67392 5.7767 7.40215 6.70443 6.46447C7.63216 5.52678 8.89042 5 10.2024 5ZM10.2024 7C9.41523 7 8.66026 7.31607 8.10363 7.87868C7.54699 8.44129 7.23428 9.20435 7.23428 10C7.23428 10.7956 7.54699 11.5587 8.10363 12.1213C8.66026 12.6839 9.41523 13 10.2024 13C10.9896 13 11.7446 12.6839 12.3012 12.1213C12.8579 11.5587 13.1706 10.7956 13.1706 10C13.1706 9.20435 12.8579 8.44129 12.3012 7.87868C11.7446 7.31607 10.9896 7 10.2024 7Z"
                  fill="black"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="31"
                height="19"
                viewBox="0 0 31 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.698 13.2031C27.698 13.2031 30.1274 15.6861 30.7283 16.8351C30.74 16.8517 30.7491 16.8701 30.7554 16.8895C31.0003 17.314 31.0604 17.6467 30.9402 17.8924C30.7373 18.2982 30.0507 18.5019 29.8179 18.519H25.524C25.225 18.519 24.603 18.4381 23.8458 17.8971C23.2674 17.4788 22.692 16.79 22.1346 16.1168C21.3023 15.117 20.5826 14.2495 19.854 14.2495C19.7619 14.2493 19.6705 14.265 19.5835 14.2961C19.0321 14.4765 18.332 15.2896 18.332 17.4555C18.332 18.1334 17.8152 18.519 17.4531 18.519H15.4865C14.8164 18.519 11.3278 18.2764 8.23441 14.9009C4.44386 10.7682 1.03942 2.47794 1.00637 2.40487C0.794532 1.86845 1.23924 1.57615 1.72001 1.57615H6.05593C6.63736 1.57615 6.82666 1.93997 6.95887 2.26649C7.11212 2.6412 7.68003 4.14004 8.61151 5.82391C10.1199 8.5635 11.0469 9.6783 11.7876 9.6783C11.9267 9.67872 12.0635 9.64118 12.1842 9.56946C13.1518 9.01906 12.9715 5.44298 12.9264 4.70599C12.9264 4.56295 12.9249 3.1092 12.4291 2.40642C12.0745 1.90266 11.4706 1.70675 11.1055 1.63523C11.2031 1.48908 11.4105 1.26518 11.6764 1.13302C12.339 0.790965 13.5364 0.741211 14.7248 0.741211H15.3843C16.6734 0.759869 17.0069 0.845384 17.4757 0.968214C18.4192 1.20144 18.4372 1.83425 18.3546 3.98922C18.3305 4.60493 18.305 5.29838 18.305 6.11466C18.305 6.2888 18.2975 6.48315 18.2975 6.68061C18.2689 7.78609 18.2314 9.0315 18.9856 9.54303C19.0834 9.60609 19.1963 9.63949 19.3116 9.63943C19.573 9.63943 20.3558 9.63943 22.4787 5.869C23.4101 4.20379 24.1313 2.24005 24.1809 2.09235C24.2229 2.00994 24.3491 1.77827 24.5024 1.68498C24.6114 1.62496 24.7335 1.59498 24.8569 1.59792H29.9576C30.5135 1.59792 30.8906 1.68499 30.9642 1.90266C31.0874 2.2556 30.9402 3.33309 28.6114 6.59199C28.2193 7.13462 27.8753 7.60417 27.5733 8.01465C25.4624 10.8817 25.4624 11.0263 27.698 13.2031Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="additional-info">
          <h3>ДОП ИНФО</h3>
          <div className="Yarik-data">
            <span>ЕГРН 1478 456 4123 </span>
            <span> ИНН 1456 8741 0000 </span>
            <span> ИП Захаров Ярослав</span>
          </div>
        </div>
        <img src={process.env.PUBLIC_URL + "/img/map.png"} alt="карта" />
      </section>
    </div>
    );
};

export const Header = () => {
    return (
        <nav>
        <ul className="navigation-list">
          <li className="navigation-item navigation-logo">
            <a className="navigation-link" href={process.env.PUBLIC_URL + "/"}>КАМЕНЬ Я ДАМ</a>
          </li>
          <li className="navigation-item">
            <a className="navigation-link" href="#">корзина</a>
          </li>
          <li className="navigation-item navigation-catalog">
            <a className="navigation-link" href="#">каталог</a>
            <div className="catalog-group">
              <img className="arrow-catalog" src={process.env.PUBLIC_URL + "/img/arrow.svg"} />
              <ul className="catalog-list">
                <Categories/>
              </ul>
            </div>
          </li>
          <li className="navigation-item navigation-search">
            <a className="navigation-link" href="#">поиск</a>
            <div className="catalog-group">
              <img className="arrow-catalog" src={process.env.PUBLIC_URL + "/img/arrow.svg"} />
              <form
                className="search-form"
                action="https://echo.htmlacademy.ru/"
                method="get"
              >
                <input
                  type="search"
                  id="site-search"
                  name="site-search"
                  className="search-input"
                  placeholder="введите название..."
                />
              </form>
            </div>
          </li>
          <li className="navigation-item">
            <a className="navigation-link" href={process.env.PUBLIC_URL + "/profile"}>профиль</a>
          </li>
        </ul>
      </nav>
    );
};

export const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetch(`${Config.serverBind}/api/category`)
        .then(response => response.json())
        .then(data => { if(data['error']) return []; else return data; })
        .then(data => { data = data.map((value: Category) => { 
            let level = 0; let current = value; while(current.parent && current.parent > 0) { level++; current = data.find((value2: Category) => value2.id == current.parent); } value.level = level; return value;
            }); setCategories(data) })
        .catch((error) => StoneError.HandleError(error));
    }, []);

    return (<div>
        {categories.map((value) => (
            <li className="catalog-item">
                <a href={process.env.PUBLIC_URL + `/category/${value.id}`}>{'-'.repeat(value.level || 0)+value.name}</a>
            </li>
        ))}
    </div>);
}

export const Items = ({filter="id", asc=false, category=0, count=30}) => {
    const [items, setItems] = useState<Item[]>([]);
    const [loadedItems, setLoaded] = useState(0);
    const [pagesToLoad, setPages] = useState(1);

    useEffect(() => {
    fetch(`${Config.serverBind}/api/item/?filter=${filter}${asc ? "&asc=1" : ""}${category ? `&category=${category}` : ""}&count=${count}&index=${(pagesToLoad - 1)*count}`)
        .then(response => response.json())
        .then(data => { setItems([...items, ...data]); setLoaded(data.length); })
        .catch((error) => StoneError.HandleError(error));
    }, [pagesToLoad]);

    const continueLoading = () => {
        setPages(pagesToLoad + 1);
    };
  
    return ( <div>
            <ul className="products-list">
                {items.map((item) => (
                <li className="product-item">
              <div className="product-info-wrapper">
                <img
                  src={process.env.PUBLIC_URL + "/img/agat-s-kvartsem.jpg"}
                  className="product-item-img"
                  alt={item.name}
                  width="293"
                  height="286"
                />
                <p className="product-price">{item.cost}</p>
                <p className="product-name">{item.name}</p>
                <p className="product-info">{item.description}</p>
              </div>
              <div className="btn-wrapper">
                <button className="add-btn product-btn">+</button>
                <span className="item-count product-btn">0</span>
                <button className="delete-btn product-btn">-</button>
                <button className="favorite-btn product-btn">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.0117 3.58539L9.92303 2.49839C9.41276 1.98205 8.80523 1.57158 8.13543 1.29063C7.46562 1.00968 6.74677 0.863789 6.02027 0.861359C5.29376 0.858929 4.57395 1.00001 3.90227 1.27647C3.2306 1.55294 2.62033 1.95933 2.10661 2.47224C1.59289 2.98516 1.18586 3.59446 0.908961 4.26508C0.632062 4.9357 0.490761 5.65439 0.493195 6.37975C0.495629 7.10512 0.641749 7.82284 0.923142 8.4916C1.20454 9.16035 1.61564 9.76692 2.1328 10.2764L10.9857 19.1154L10.9877 19.1134L11.0137 19.1394L19.8666 10.3004C20.3838 9.79092 20.7949 9.18435 21.0763 8.5156C21.3577 7.84684 21.5038 7.12912 21.5062 6.40375C21.5087 5.67839 21.3674 4.9597 21.0905 4.28908C20.8136 3.61846 20.4065 3.00916 19.8928 2.49624C19.3791 1.98333 18.7688 1.57694 18.0972 1.30047C17.4255 1.02401 16.7057 0.882929 15.9792 0.885359C15.2527 0.887789 14.5338 1.03368 13.864 1.31463C13.1942 1.59558 12.5867 2.00605 12.0764 2.52239L11.0117 3.58539ZM10.9877 16.2854L15.9315 11.3484L17.3837 9.94839H17.3857L18.4504 8.88639C19.1079 8.22998 19.4772 7.33969 19.4772 6.41139C19.4772 5.48308 19.1079 4.5928 18.4504 3.93639C17.793 3.27997 16.9013 2.91121 15.9715 2.91121C15.0418 2.91121 14.1501 3.27997 13.4926 3.93639L11.0127 6.41339L11.0057 6.40639L8.5068 3.91339C7.84936 3.25697 6.95767 2.88821 6.02791 2.88821C5.09815 2.88821 4.20646 3.25697 3.54902 3.91339C2.89158 4.5698 2.52223 5.46008 2.52223 6.38839C2.52223 7.31669 2.89158 8.20698 3.54902 8.86339L6.09301 11.4034L6.09401 11.4004L10.9877 16.2854Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </li>
        ))}
            </ul>
            {loadedItems == count ? (
                <button className="add-items-btn" onClick={continueLoading} type="submit">ЗАГРУЗИТЬ ЕЩЕ</button>
            ) : (<div></div>)}
        </div>);
}