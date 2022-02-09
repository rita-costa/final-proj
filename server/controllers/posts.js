// All handlers for routes - ie logic

import PostMessage from '../models/recordings.js';

export const getPosts = async (req, res) => {
    try {
        // Getting all posts from database

        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    const post = req.body;

    // passing in new req info to create new post, not sending it yet
    const newPost = new PostMessage(post);

    try {
        // saving to database
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
};


// export const createPost = async (req, res) => {
//     const { title, message, selectedFile, creator, tags } = req.body;

//     const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

//     try {
//         await newPostMessage.save();

//         res.status(201).json(newPostMessage);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }