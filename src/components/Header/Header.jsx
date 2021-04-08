import React from "react";
import classes from "./Header.module.css";
import logoPhoto from "../../assets/images/logo.png";
import UserSign from "../../assets/images/userSign.png";
import UserAdd from "../../assets/images/userAdd.png";
import { NavLink } from "react-router-dom";



const Header = (props) => {
  return (
    <header className={classes.header}>
      <NavLink to="/profile">
      <img alt="logo" src={logoPhoto} />
      </NavLink>
      <h3>Welcome to Multigram social network!</h3>
      <div className={classes.link}>
        {props.isAuth ? props.login : <NavLink to="/login"><img src={UserSign} alt="Вход" /></NavLink>}
      <NavLink to="/registor">
        <img src={UserAdd} alt="Регистрация" />
      </NavLink>
      
      </div>
    </header>
  );
};
export default Header;
