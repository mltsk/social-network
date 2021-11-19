import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile } from '../../redux/profile-reducer';
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
    }
    render() {
        return <Profile { ...this.props } />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

const ProfileContainerWithProps = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getProfile})(ProfileContainerWithProps);