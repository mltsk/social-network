import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from 'react-router';

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />  );
    const messagesElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message}/> );
    const newMessageBody = props.dialogsPage.newMessageBody;

    const onSendMessageClick = () => {
        props.SendMessageClick()
    }

    const onNewMessageChange = (e) => {
        const body = e.target.value;
        props.NewMessageChange(body)
    }

    if(!props.isAuth) return <Redirect to='/login' />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={ newMessageBody } cols="30" rows="5"></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;