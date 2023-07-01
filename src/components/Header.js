import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import "../pages/Header.css";

import logo from "../images/logo.svg";

const Header = () => {
  const navLinks = [
    {
      url: "/",
      name: "Поиск",
    },
    {
      url: "/trends",
      name: "Тренды",
    },
    {
      url: "/random",
      name: "Случайный гиф",
    },
  ];

  const location = useLocation();

  return (
    <header className='header'>
      <div className="header__left">
        <Link to="/">
          <img src={logo} alt="Логотип" />
        </Link>
      </div>

      <div className="header__right">
        <nav className="header__nav">
          {navLinks.map((navLink, index) => (
            <Link 
              key={index}
              to={navLink.url}
              className={`header__nav-link ${navLink.url === location.pathname ? "header__nav-link_active" : ""}`}
            >
              {navLink.name}
            </Link>
          ))}
        </nav>
      </div>
      
    </header>
  );
};

export default Header;