import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "700cfc2a-4958-4b62-aaa8-1dfb382637d1",
    },
}) 

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(res => res.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(res => res.data.resultCode);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data.resultCode);
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(res => res.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status });
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(res => res.data); 
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}
