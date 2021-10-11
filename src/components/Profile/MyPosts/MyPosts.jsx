import React from 'react';
import Post from './Post/Post.jsx'
import classes from './MyPosts.module.css';

const MyPosts = () => {
  return (
  <div>My posts
    <div>New posts</div> 
    <div className={classes.posts}>
      <Post text="first comment"/>
      <Post text="second comment"/>
    </div>
  </div>
  )
}

export default MyPosts;