const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
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
            users: [ ...action.users ]
        }
        case SET_TOTAL_USERS_COUNT: 
        return {
            ...state,
            totalUsersCount: action.totalUsersCount
        }
        case SET_CURRENT_PAGE: 
        return {
            ...state,
            currentPage: action.currentPage
        }
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID });
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({type: SET_USERS, users });
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });

export default usersReducer;