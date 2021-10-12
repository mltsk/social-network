import React from 'react';
import Post from './Post/Post.jsx'
import classes from './MyPosts.module.css';

const MyPosts = ({postData}) => {
  return (
  <div>My posts
    <div>
      <form action="">
        <textarea name="comment" id="comment" cols="50" rows="10"></textarea> <br />
        <button type="submit">Отправить</button>  
      </form>  
    </div> 
    <div className={classes.posts}>
    {postData.map(({id, text, likeCount}) => <Post text={text} likeCount={likeCount}/>)}
    </div>
  </div>
  )
}

export default MyPosts;