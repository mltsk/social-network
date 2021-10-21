import React from 'react';
import styles from './users.module.css'

const Users = (props) => {
    const users = [
        {id: 1, photoURL: 'https://topmsg.ru/wp-content/uploads/anonymous.jpg', isFollowed: false, fullName: 'Dmitriy1', status: 'I am a boss', location: { city: 'Minsk', country: 'belarus' } },
        {id: 2, photoURL: 'https://topmsg.ru/wp-content/uploads/anonymous.jpg', isFollowed: true, fullName: 'Dmitriy2', status: 'I am a boss', location: { city: 'Minsk', country: 'belarus' } },
        {id: 3, photoURL: 'https://topmsg.ru/wp-content/uploads/anonymous.jpg', isFollowed: false, fullName: 'Dmitriy3', status: 'I am a boss', location: { city: 'Minsk', country: 'belarus' } },
        {id: 4, photoURL: 'https://topmsg.ru/wp-content/uploads/anonymous.jpg', isFollowed: true, fullName: 'Dmitriy4', status: 'I am a boss', location: { city: 'Minsk', country: 'belarus' } },
    ]
    if (!props.users.length) props.setUsers(users);

    return (
    <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={styles.userPhoto} width="100" height="100" src={u.photoURL} alt="аватарка" />
                    </div>
                    <div>
                        { u.isFollowed 
                        ? <button onClick={ () => props.unfollow(u.id) }>Unfollow</button> 
                        : <button onClick={ () => props.follow(u.id) }>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
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
