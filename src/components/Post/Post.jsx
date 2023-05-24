import React, { useState } from "react";
import "./Post.css";
import Comment from "../../assets/logo.png";
import Share from "../../assets/logo.png";
import Heart from "../../assets/logo.png";
import NotLike from "../../assets/logo.png";
import axios from "axios";

function Post({ post, setrefresh }) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5005/comments/${post._id}`,
        { comment }
      );
      console.log(response.data);
      setrefresh(true)
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) {
    return <p>Loading..........!!!</p>;
  }

  return (
    <div className="Post">
      <img src={post.picture} alt="Post" />
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
        <h2>
          {post.firstName} {post.lastName}
        </h2>
        <p>{post.description}</p>
        <p>{post.comments}</p>
      </div>

      <form onSubmit={handleSubmitComment}>
        <input type="text" value={comment} onChange={handleCommentChange} />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}
/*
function Posts({ posts }) {
  return (
    <div className="Posts">
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
}
*/
export default Post;
