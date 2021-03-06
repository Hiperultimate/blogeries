import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

function Post({ post }) {
  const { desc, title, createdAt, photo, categories, _id } = post;
  const PF = "http://localhost:5000/images/"  //SERVER URL IMAGE FILE LOCATION CHANGETHIS ON PRODUCTION
  return (
    <div className="post">
      {post.photo && (
        <img
          className="postImg"
          src={PF + photo}
          // src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          {categories.map((c) => {
            return <span className="postCat">{c.name}</span>;
          })}
        </div>
        <Link to={`/post/${_id}`} className="link">
          <span className="postTitle">{title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{desc}</p>
    </div>
  );
}

export default Post;
