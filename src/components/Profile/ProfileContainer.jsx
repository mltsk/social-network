import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { withRouter } from "react-router";
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 20868;
        this.props.getUserStatus(userId);
        this.props.getProfile(userId);
        
    }
    render() {
        return <Profile { ...this.props } />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps, { getProfile, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)