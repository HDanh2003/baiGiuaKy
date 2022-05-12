import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
}

const handleRegister = (user) => {
    return axios.post('/api/createUser', {
        username: user.username,
        email: user.email,
        password: user.password
    })
}

export {
    handleLoginApi,
    handleRegister
}