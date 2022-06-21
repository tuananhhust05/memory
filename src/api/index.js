import axios from 'axios'; //

const url = 'https://memory-tuananh.herokuapp.com/posts';// config port đến server. => deploy server xong thì sửa thằng url gốc 

export const fetchPosts = () => axios.get(url);  // call dữ liệu => show tất cả các bài post 
export const createPost = (newPost) => axios.post(url, newPost); //tạo bài post và truyền về server theo link 
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);// truyền thông tin like 
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);// bài viết mơi mới
export const deletePost = (id) => axios.delete(`${url}/${id}`);  // xóa post theo id 
