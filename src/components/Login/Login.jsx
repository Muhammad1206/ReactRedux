import React from "react";
import classes from "./Login.module.css"


const Login = () => {
    
    const login = (l) => {
     const text = l.target.value; 
    }
    return (
        <div className={classes.container}>
        <div className={classes.login}>
        <input type="text" placeholder="Логин ё рақами мобилӣ" />
        </div>
        <div className={classes.password}>
        <input type="password" placeholder="Рамз" maxLength='20' size="40"/>
        </div>
        <div className={classes.button}>
        <button >Даромад</button>
        </div>
        <div className={classes.socialLinks}>
            <img src="" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
        </div>
        </div>
    )
}
export default Login; 