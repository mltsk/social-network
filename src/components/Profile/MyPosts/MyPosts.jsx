import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements =
        props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const NewPostForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="newPost" component="textarea" />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        )
    }

    const NewPostReduxForm = reduxForm({
        form: 'newPost'
    })(NewPostForm)

    const handelOnSubmit = (formData) => {
        props.addPost(formData.newPost);
        console.log(formData);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
                <NewPostReduxForm onSubmit={handelOnSubmit} />
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;