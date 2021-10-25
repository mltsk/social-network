import axios from 'axios';
import React from 'react';
import styles from './users.module.css';
import userPhoto from './../../assets/images/images.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            });
    }
    handelOnClickPage = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then(res => {
            this.props.setUsers(res.data.items)
        });
    }
    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div className={styles.pagination}>
                    <ul className={styles.paginationList}>
                        {pages.map(page => <li
                            onClick={ () => this.handelOnClickPage(page) }
                            className={this.props.currentPage === page
                                && styles.activePage
                            } key={page}>{page}</li>)}
                    </ul>
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img className={styles.userPhoto} width="100" height="100" src={
                                    u.photos.small !== null
                                        ? u.photos.small
                                        : userPhoto
                                } alt="аватарка" />
                            </div>
                            <div>
                                {u.isFollowed
                                    ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div><div>{u.status}</div>
                            </span>
                            <span>
                                <div>u.location.country</div>
                                <div>u.location.city</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;
