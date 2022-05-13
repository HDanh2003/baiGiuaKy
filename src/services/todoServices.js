import axios from "../axios";

const getAllTodo = (userId) => {
    return axios.get(`/api/getTodos?userId=${userId}`);
}

const addTodo = (todo) => {
    return axios.post('/api/addTodo', todo);
}

const editTodo = (todo) => {
    return axios.put('/api/editTodo', todo);
}

export {
    getAllTodo,
    addTodo,
    editTodo
}
