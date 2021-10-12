import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from  './Navbar.module.css';

const Navbar = () => {
  return <nav className={classes.nav}>
  <ul className={classes.list}>
    <li className={classes.item}><NavLink className={classes.link} activeClassName={classes.active} to="/profile">Profile</NavLink></li>
    <li className={classes.item}><NavLink className={classes.link} activeClassName={classes.active} to="/dialogs">Messages</NavLink></li>
    <li className={classes.item}><a className={classes.link} href="#">News</a></li>
    <li className={classes.item}><a className={classes.link} href="#">Music</a></li>
    <li className={classes.item}><a className={classes.link} href="#">Settings</a></li>
  </ul>
</nav>
}

export default Navbar;