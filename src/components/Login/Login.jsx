import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validators';
import { Input } from '../common/FormControls/FormControls';

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="login" 
            type="text" 
            component={Input}
            validate={[requiredField]}
            placeholder="Login" />
        </div>
        <div>
            <Field name="password" 
            type="password" 
            component={Input}
            validate={[requiredField]} 
            placeholder="Password" />
        </div>
        <div>
            <label htmlFor="remember-me">Remember me</label>
            <Field name="rememberMe" id="remember-me" component={Input} type="checkbox" />
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {
    const handelOnSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={handelOnSubmit} />
    </div>
}

export default Login;
