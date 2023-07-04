import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../pages/Header.css";
import logo from "../images/logo.svg";

const Header = () => {
  const navLinks = [
    {
      url: "/trends",
      name: "Гифки в тренде",
    },
    {
      url: "/",
      name: "Поиск",
    },
    {
      url: "/random",
      name: "Случайный гиф",
    },
  ];

  const location = useLocation();

  return (
    <header className={`header ${location.pathname === '/' && `header_extention`}`}>
      <Link to="/">
        <img src={logo} alt="Логотип Гифкус" className='header__logo'/>
      </Link>
      <p className='header__caption'>Гифки на любой вкус</p>
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
    </header>
  );
};

export default Header;