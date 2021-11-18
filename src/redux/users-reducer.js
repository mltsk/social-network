const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: true,
}

const usersReducer = (state = initState, action) => {
    switch(action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userID) {
                        return { ...u, followed: false }
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
        case TOGGLE_IS_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const follow = (userID) => ({type: FOLLOW, userID });
export const unfollow = (userID) => ({type: UNFOLLOW, userID });
export const setUsers = (users) => ({type: SET_USERS, users });
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;