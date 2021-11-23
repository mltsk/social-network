import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import { requiredField } from '../../utils/validators';
import { Input } from '../common/FormControls/FormControls';
import { login } from './../../redux/auth-reducer'

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="email" 
            type="text" 
            component={Input}
            validate={[requiredField]}
            placeholder="email" />
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

const Login = (props) => {
    const handelOnSubmit = (formData) => {
        const { email, password, rememberMe } = formData;
        props.login(email, password, rememberMe)
    }

    if(props.isAuth) return <Redirect to="/profile" />

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={handelOnSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login);
