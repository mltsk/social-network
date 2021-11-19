import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile } from '../../redux/profile-reducer';
import { Redirect, withRouter } from "react-router";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
    }
    render() {
        if(!this.props.isAuth) return <Redirect to='/login' />
        return <Profile { ...this.props } />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer));