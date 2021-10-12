import React from 'react';
import classes from './Message.module.css';

const Message = ({message, name}) => {
  return (
    <div className={classes.message}>
      <strong>{name}</strong>
      <p className={classes.text}>{message}</p>
    </div>
  )
}
export default Message;