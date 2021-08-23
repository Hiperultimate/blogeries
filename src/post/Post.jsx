import React from "react";
import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illo
        dolore adipisci, iusto veritatis repellendus cum assumenda amet omnis
        placeat natus dignissimos eos, culpa at vero non ut error quae?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illo
        dolore adipisci, iusto veritatis repellendus cum assumenda amet omnis
        placeat natus dignissimos eos, culpa at vero non ut error quae?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illo
        dolore adipisci, iusto veritatis repellendus cum assumenda amet omnis
        placeat natus dignissimos eos, culpa at vero non ut error quae?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illo
        dolore adipisci, iusto veritatis repellendus cum assumenda amet omnis
        placeat natus dignissimos eos, culpa at vero non ut error quae?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores illo
        dolore adipisci, iusto veritatis repellendus cum assumenda amet omnis
        placeat natus dignissimos eos, culpa at vero non ut error quae?
      </p>
    </div>
  );
}

export default Post;
