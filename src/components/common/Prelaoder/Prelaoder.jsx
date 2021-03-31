import React from 'react';
import classes from './Prelaoder.module.css'
import prelaoder from '../../../assets/images/prelaoder.gif';

const Prelaoder = () => {
    return <div className= {classes.container}>
    <img src={prelaoder} alt='prelaoder' className={classes.prelaoder}/>
    <div>
        Загружаем...
    </div>
    </div>
}


export default Prelaoder;