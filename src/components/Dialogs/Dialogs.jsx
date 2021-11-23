import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />  );
    const messagesElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message}/> );

    const DialogFrom = (props) => {
        return  <form onSubmit={props.handleSubmit}>
            <div><Field name="newMessage" component="textarea" cols="30" rows="5"></Field></div>
            <div><button>Send</button></div>
        </form>
    }

    const DialogReduxForm = reduxForm({
        form: 'dialog'
    })(DialogFrom);

    const handelOnSubmit = (formData) => {
        props.SendMessageClick(formData.newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <DialogReduxForm onSubmit={handelOnSubmit} />
            </div>
        </div>
    )
}

export default Dialogs;