import axios from 'axios';
import React from 'react';
import styles from './users.module.css';
import userPhoto from './../../assets/images/images.png';

const Users = (props) => {
    const getUsers = () => {
        if (!props.users.length) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => props.setUsers(res.data.items));
        }
    }
    return (
        <div>
            <button></button>
            {
                props.users.map(u => <div key={u.id}>
                    {console.log(u.photos.small)}
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
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
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
