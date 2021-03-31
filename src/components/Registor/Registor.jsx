import React from "react";
import classes from "./Registor.module.css"



const Registor = ()=> {
    return (
    <div className={classes.container}>
        <div className={classes.name}>
          <span>Ном: </span>  
          <input type="text" placeholder="Номи худро нависед*"/>
        </div>
        <div className={classes.surname}>
         <span>Насаб: </span> 
         <input type="text" placeholder="Насаби худро нависед*"/>
        </div>
    </div>
    )
}


export default Registor;