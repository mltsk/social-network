const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initState = {
    users: [],
    newPostText: 'it-kamasutra.com'
}

const usersReducer = (state = initState, action) => {
    switch(action.type) {
        case FOLLOW: 
        return {
            ...state,
            users: state.users.map( u => {
                if(u.id === action.userID) {
                    return { ...u, isFollowed: true }
                }
                return u;
            })
        }
        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map( u => {
                if(u.id === action.userID) {
                    return { ...u, isFollowed: false }
                }
                return u;
            })
        }
        case SET_USERS: 
        return {
            ...state,
            users: [ ...state.users, ...action.users ]
        }
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID });
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID });
export const setUsers = (users) => ({type: SET_USERS, users });

export default usersReducer;