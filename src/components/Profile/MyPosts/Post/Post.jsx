import React from 'react';
import classes from './Post.module.css';

const Post = ({text, likeCount}) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <img className={classes.avatar} width="50" height='50' src="https://www.meme-arsenal.com/memes/36b78c8b7cd957e082f53148b74787ea.jpg" alt="Аватар" />
        <div className={classes.item}>{text}</div>
      </div>
      <div>Likes: {likeCount}</div>
    </div>
      
  )
}

export default Post;