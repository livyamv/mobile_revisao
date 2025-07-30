import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    accept: "application/json",
  },
});

const sheets = {
  getUsers: () => api.get("users/"),    // corrigido endpoint correto para users
  getTodos: () => api.get("todos/"),    // endpoint correto 'todos' e não 'todo'
  getPosts: () => api.get("posts/"),
};

export default sheets;
