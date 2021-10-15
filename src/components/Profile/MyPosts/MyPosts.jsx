import React from 'react';
import Post from './Post/Post.jsx'
import classes from './MyPosts.module.css';

const MyPosts = ({posts, newPostValue}) => {
  

  const handlerTextarea = (event) => {
    newPostValue = event.target.value
    console.log(event.target.value);
    console.log('newPostValue: ', newPostValue); 
  }

  const addPost = () => {
    
  }

  return (
  <div>My posts
    <div>
      <form action="">
        <textarea onChange={handlerTextarea} name="comment" id="comment" cols="50" rows="10" value={newPostValue}/><br />
        <button onClick={ addPost } type="submit">Добавить пост</button>  
      </form>  
    </div> 
    <div className={classes.container}>
      {posts.map(({id, text, likeCount}) => <Post text={text} likeCount={likeCount}/>)}
    </div>
  </div>
  )
}

export default MyPosts;