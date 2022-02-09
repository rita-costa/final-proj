import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BootForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../actions/posts';

const Form = () => {

    //Initially setting state for post data
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        tags: '',
        selectedFile: '',
        message: ''
    });

    // allows to dispatch actions
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Fields from form: ${postData.creator}`)
        dispatch(createPost(postData))
    }

    const clear = () => {
      setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return (
    <div>

      <h4>New Post</h4>

      <BootForm onSubmit={handleSubmit}>
        <BootForm.Group>
          <BootForm.Label>Creator:</BootForm.Label>
          <BootForm.Control 
            type="text" 
            name="creator" 
            placeholder="Enter your name"
            // all post data stored in postData obj in state w specific keys
            value={postData.creator}
            // set state w obj
            onChange= {(e) => setPostData({ ...postData, creator: e.target.value })} />
        </BootForm.Group>

        <BootForm.Group>
          <BootForm.Label>Post Title:</BootForm.Label>
          <BootForm.Control 
            type="text" 
            name="title" 
            placeholder="Post title"
            // all post data stored in postData obj in state w specific keys
            value={postData.title}
            // set state w obj
            onChange= {(e) => setPostData({ ...postData, title: e.target.value })} />
        </BootForm.Group>

        <BootForm.Group>
          <BootForm.Label>Tags:</BootForm.Label>
          <BootForm.Control 
            type="text" 
            name="tags" 
            placeholder="Any tags..."
            // all post data stored in postData obj in state w specific keys
            value={postData.tags}
            // set state w obj
            onChange= {(e) => setPostData({ ...postData, tags: e.target.value })} />
        </BootForm.Group>

        <BootForm.Group>
          <BootForm.Label>File:</BootForm.Label>
          <BootForm.Control 
            type="text" 
            name="file" 
            placeholder="Image file"
            // all post data stored in postData obj in state w specific keys
            value={postData.selectedFile}
            // set state w obj
            onChange= {(e) => setPostData({ ...postData, selectedFile: e.target.value })} />
        </BootForm.Group>


        <Button variant="primary" type="submit">
           Sumbit
        </Button>

        <Button variant="secondary"  onClick={clear}>
           Clear
        </Button>

      </BootForm>
    </div>
    );
}

export default Form;