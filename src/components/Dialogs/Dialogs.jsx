import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const { dialogs, messages } = props.state;
  return (
    <div className={classes.dialogs}>
      <aside className={classes.aside}>
        <ul className={classes.list}>
          { dialogs.map(({name, id}) => <DialogItem name={name} id={id} />) }
        </ul>
      </aside>
      <div className={classes.conversation}>
        { messages.map(({message, name}) => <Message name={name} message={message}/>) }
      </div>
    </div>
  )
}

export default Dialogs;