import axios from 'axios';
import React from 'react';
import Users from './Users'
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader.jsx';
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, 
        {
            withCredentials: true
        })
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            });
    }
    handelOnClickPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, 
        {
            withCredentials: true
        })
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(res.data.items)
            });
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
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching,
})(UsersContainer);
