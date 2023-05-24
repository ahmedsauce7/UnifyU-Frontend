import React, { useState } from "react";
import "./Post.css";
import Comment from "../../assets/logo.png";
import Share from "../../assets/logo.png";
import Heart from "../../assets/logo.png";
import NotLike from "../../assets/logo.png";
import axios from "axios";

function Post({ post }) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://localhost:5005/comments/${post._id}`, { comment });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) {
    return <p>Loading..........!!!</p>;
  }

  return (
    <div className="Post">
      <div className="PostReact">
        <img
          className="ReactIcons"
          src={post.likes ? Heart : NotLike}
          alt="Like"
        />
        <img className="ReactIcons" src={Comment} alt="Comment" />
        <img className="ReactIcons" src={Share} alt="Share" />
      </div>
      <div>
        <p>desc: {post.description}</p>
      </div>

      <span>{post.likes} Likes</span>

      <div className="Details">
        <span>
          <b>{post.name}</b>
        </span>
        <span>{post.desc}</span>
      </div>

      <form onSubmit={handleSubmitComment}>
        <input type="text" value={comment} onChange={handleCommentChange} />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}

export default Post;
