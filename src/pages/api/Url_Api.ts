import axios from "axios";

const API = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

// CRUD API
export const fetchPost = () => API.get('/posts');
export const fetchPostById = (id: string | string[] | undefined) => API.get(`/posts/${id}`);
export const createPost = (data: { userId: number; title: string; body: string; }) => API.post('/posts', data);
export const updatePost = (id: string | string[] | undefined, data: { userId: number; title: string; body: string; }) => API.patch(`/posts/${id}`, data);
export const deletePost = (id: any) => API.delete(`/posts/${id}`);