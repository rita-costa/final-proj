import axios from 'axios';

// url pointing to backend route
const url = 'http://localhost:5000/posts';

// backend get all posts 
export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

// ACTION DEF:
// 1. define in api index
// 2. define in actions
// 3. create hook to link to html