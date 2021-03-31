import React from "react";
import classes from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import userImage from '../../../assets/images/avatar.jpg';


const DialogItem = (props) => {
  const userId = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={userId} activeClassName={classes.active} className={classes.dialogItems}>
        <img src={userImage} alt="Users"/>
        <div className={classes.info}>
        <div className={classes.names}>
           {props.name}
        </div>
        <div className={classes.times}>
         Вақти охирон дар сайт: {props.time}
        </div>
        </div>
      </NavLink>
    </div>
  );
};


export default DialogItem;
