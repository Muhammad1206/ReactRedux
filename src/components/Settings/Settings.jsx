import React from "react";
import classes from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={classes.container}>
      <div className={classes.items}>
      <span>Созкуниҳо</span>
    <div className={classes.file}>
      <span>Расми асосиро иваз кардан!</span>
      <input type="file" accept="image/*"/> 
      </div>
      <div className={classes.button}>
      <button>Иваз кардан</button>  
      </div>  
      </div> 
    </div>
    
  );
};
export default Settings;
