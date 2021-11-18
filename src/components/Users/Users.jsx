import React from "react";
import styles from './users.module.css';
import userPhoto from './../../assets/images/images.png';
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={styles.pagination}>
                <ul className={styles.paginationList}>
                    {pages.map(page => <li
                        onClick={ () => props.handelOnClickPage(page) }
                        className={props.currentPage === page
                            && styles.activePage
                        } key={page}>{page}</li>)}
                </ul>
            </div>
            {   
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img className={styles.userPhoto} width="100" height="100" src={
                                    u.photos.small !== null
                                        ? u.photos.small
                                        : userPhoto
                                } alt="аватарка" />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    { 
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "700cfc2a-4958-4b62-aaa8-1dfb382637d1"
                                        }
                                    })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });
                                }}>Unfollow</button>

                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    null,
                                    { 
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "700cfc2a-4958-4b62-aaa8-1dfb382637d1"
                                        }
                                    })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
                                }}>Follow</button>}
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

export default Users;