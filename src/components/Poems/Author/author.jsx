import React from 'react';
import classes from './author.module.css';
import author from "../../../img/charentc.jpg";

const Author = () => {
    return  <div className={classes.author}>
                <div className={classes.block}>
                    <img src={author} alt="" className={classes.img}/>
                    <h3 className={classes.title}>Եղիշե Չարենց</h3>
                    <span className={classes.date}>(1897-1937)</span>
                </div>
            </div>
};


export default Author;