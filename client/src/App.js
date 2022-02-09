import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

import "./styles.css"


const App = () => {
    // hook
    const dispatch = useDispatch();

    // callback funct to dispatch a funct
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className="main-page">

            <h1 align="center">Communicate</h1>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6" style={{backgroundColor: "yellow"}}>
                        <Posts />
                    </div>

                    <div className="col-sm-4" style={{backgroundColor: "pink"}}>
                        <Form />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default App;