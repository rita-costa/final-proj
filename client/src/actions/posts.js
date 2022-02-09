// Define actions for backend
import * as api from '../api';

// Action Creators -> return actions
export const getPosts = () => async (dispatch) => {
    try {
        // Actuallly getting data here
        const { data } = await api.fetchPosts();

        // return action that is type and payload
        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message);
    }
};

// export const createPost = (post) => async (dispatch) => {
//     try {
//         console.log(`Post is ${post.creator}`)
//         // Actuallly getting data here from backend
//         const { data } = await api.createPost(post);
//         console.log(`new post is: ${data}`);

//         dispatch({ type: 'CREATE', payload: data });

//     } catch (error) {
//         console.log(error.message);
//     }
// };

export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
      console.log(`new post is: ${data.creator}`);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };