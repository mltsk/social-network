import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    const posts = props.store.getState().profilePage.posts;
    const newPostText = props.store.getState().profilePage.newPostText;
    
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        const action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={posts} newPostText={newPostText} />)
}

export default MyPostsContainer;