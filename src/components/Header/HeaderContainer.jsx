import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUser, logout } from '../../redux/auth-reducer.js'
class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUser()
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUser, logout })(HeaderContainer);
