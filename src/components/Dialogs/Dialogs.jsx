import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControls/FormControls';
import { maxLengthCreator, requiredField } from '../../utils/validators';

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />  );
    const messagesElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message}/> );

    const maxLength50 = maxLengthCreator(50);
    const DialogFrom = (props) => {
        return  <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessage" 
                component={Textarea} 
                validate={[requiredField, maxLength50]}
                cols="30" rows="5" />
                </div>
            <div>
                <button>Send</button>
            </div>
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