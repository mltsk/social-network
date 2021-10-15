import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfieInfo';

const Profile = ({state: {posts, newPostValue}}) => {
  return <div className={classes.content}>
    <ProfileInfo />
    <MyPosts posts={posts} newPostValue={newPostValue}/>
  </div>
}

export default Profile;