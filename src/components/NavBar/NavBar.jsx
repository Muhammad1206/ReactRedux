import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>
         Саҳифаи шахсӣ
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>
          Хабарҳо
        </NavLink>
      </div>
      <div className = {classes.item}>
        <NavLink to="users" activeClassName={classes.activeLink}>
          Мардум
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="music" activeClassName={classes.activeLink}>
          Мусиқа 
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/video" activeClassName={classes.activeLink}>
          Видео 
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="news" activeClassName={classes.activeLink}>
          Навигариҳо
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="settings" activeClassName={classes.activeLink}>
          Созкуниҳо
        </NavLink>
      </div>
    </nav>
  );
};
export default Nav;
