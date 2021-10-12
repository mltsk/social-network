import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({id, name}) => {
  return (
    <li className={classes.item}><NavLink className={classes.link} to={`/dialogs/${id}`}>{name}</NavLink></li>
  )
}
export default DialogItem;