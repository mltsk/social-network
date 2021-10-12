import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({messagesData, dialogData}) => {
  return (
    <div className={classes.dialogs}>
      <aside className={classes.aside}>
        <ul className={classes.list}>
          {dialogData.map(({name, id}) => <DialogItem name={name} id={id} />)}
        </ul>
      </aside>
      <div className={classes.conversation}>
        {messagesData.map(({message, name}) => <Message name={name} message={message}/>)}
      </div>
    </div>
  )
}

export default Dialogs;