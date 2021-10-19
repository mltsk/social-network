import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    const dialogsPage = props.store.getState().dialogsPage;

    const SendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const NewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (<Dialogs 
        SendMessageClick={SendMessageClick} 
        NewMessageChange={NewMessageChange} 
        dialogsPage={dialogsPage}
        />)
}

export default DialogsContainer;