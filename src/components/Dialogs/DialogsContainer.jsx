import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../storeContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                const dialogsPage = store.getState().dialogsPage;

                const SendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }

                const NewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return <Dialogs SendMessageClick={SendMessageClick}
                    NewMessageChange={NewMessageChange}
                    dialogsPage={dialogsPage}
                />
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;