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

const deleteTodo = (idUser, id) => {
    return axios.delete(`/api/deleteTodo?idUser=${idUser}&id=${id}`);
}

export {
    getAllTodo,
    addTodo,
    editTodo,
    deleteTodo
}
