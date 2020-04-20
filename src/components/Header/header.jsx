import React from 'react';
import classes from './header.module.css';
import logo from "../../img/logo.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return  <header className={classes.header}>
                <img src={logo} alt="" className={classes.logo}/>
                <nav className={classes.navbar}>
                    <ul className={classes.menu}>
                        <li>
                            <NavLink to="../Poems" className={classes.link} activeClassName={classes.active}>Պոեզիա</NavLink>
                        </li>
                        <li>
                            <NavLink to="../Profile" className={classes.link} activeClassName={classes.active}>Պրոֆիլ</NavLink>
                        </li>
                        <li>
                            <NavLink to="../Dialogs" className={classes.link} activeClassName={classes.active}>Նամականի</NavLink>
                        </li>
                        <li>
                            <NavLink to="../Users" className={classes.link} activeClassName={classes.active}>Մասնակիցներ</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={classes.loginBlock}>
                    {props.isAuth
                        ? <div>{props.login} <span className={classes.link} onClick={props.logout}>Ելք</span></div>
                    : <NavLink to="./Login" className={classes.link}>Login</NavLink>}
                </div>
            </header>
};

export default Header;