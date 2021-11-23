import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: '',
}

const profileReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            debugger
            const posts = [...state.posts];
            posts.push(newPost);
            return { ...state, posts, newPostText: ''}
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case SET_USER_STATUS:
            return { ...state, status: action.status };
        default:
            return state;
    }
}

export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => dispatch(setUserProfile(data)));
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => dispatch(setUserStatus(data)));
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
}

export default profileReducer;