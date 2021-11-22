import React from 'react';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="login" type="text" component="input" placeholder="Login" />
        </div>
        <div>
            <Field name="password" type="password" component="input" placeholder="Password" />
        </div>
        <div>
            <label htmlFor="remember-me">Remember me</label>
            <Field name="rememberMe" id="remember-me" component="input" type="checkbox" />
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
