import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "700cfc2a-4958-4b62-aaa8-1dfb382637d1",
    },
}) 

const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(res => res.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(res => res.data.resultCode);
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(res => res.data.resultCode);
    }

}

export default usersAPI;
