import React from "react";
import classes from "./Header.module.css";
import logoPhoto from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/profile">
      <img alt="logo" src={logoPhoto} />
      </NavLink>
      <h3>Welcome to Multigram social network!</h3>
      <div className={classes.link}>
      <NavLink to="/login">
        <img src="./" alt="Вход" />
      </NavLink>
      <NavLink to="/registor">
        <img src="./" alt="Регистрация" />
      </NavLink>
      
      </div>
    </header>
  );
};
export default Header;
