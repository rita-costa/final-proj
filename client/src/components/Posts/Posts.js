import React from "react";
import Post from './Post/Post'
import { useSelector } from 'react-redux';


const Posts = () => {

    // state. then name given in index.js for reducers to get payload
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;