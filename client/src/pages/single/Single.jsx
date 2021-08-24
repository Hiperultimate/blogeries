import React from 'react';
import SideBar from '../../components/sidebar/SideBar.jsx';
import SinglePost from '../../components/singlePost/SinglePost.jsx';
import './single.css';

function Single(){
    return(
        <div className="single">
            <SinglePost />
            <SideBar />
        </div>
    );
}

export default Single;