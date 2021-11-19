import React from 'react';
import Users from './Users'
import { connect } from 'react-redux';
import { follow, setTotalUsersCount, unfollow, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader.jsx';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    handelOnClickPage = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isFetching && <Preloader />}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                handelOnClickPage={this.handelOnClickPage}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { follow, unfollow, setTotalUsersCount, toggleFollowingProgress, getUsers })
)(UsersContainer)