import React from "react";
import "./singlePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet, consectetur
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Saiki</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          deleniti ratione provident impedit? Quo animi incidunt, enim culpa eos
          ipsum, deserunt aspernatur corrupti optio, eligendi deleniti
          cupiditate quos iusto magni.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          deleniti ratione provident impedit? Quo animi incidunt, enim culpa eos
          ipsum, deserunt aspernatur corrupti optio, eligendi deleniti
          cupiditate quos iusto magni.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          deleniti ratione provident impedit? Quo animi incidunt, enim culpa eos
          ipsum, deserunt aspernatur corrupti optio, eligendi deleniti
          cupiditate quos iusto magni.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
