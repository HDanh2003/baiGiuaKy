import axios from "../axios";

const getAllTodo = (userId) => {
    return axios.get(`/api/getTodos?userId=${userId}`);
}

export {
    getAllTodo,
}
