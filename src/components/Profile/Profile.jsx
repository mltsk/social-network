import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfieInfo';

const Profile = ({postData}) => {
  return <div className={classes.content}>
    <ProfileInfo />
    <MyPosts postData={postData} />
  </div>
}

export default Profile;