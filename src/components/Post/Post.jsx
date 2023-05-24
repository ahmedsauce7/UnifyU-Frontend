import React, { useContext, useState } from "react";
import "./Post.css";
import Comment from "../../assets/logo.png";
import Share from "../../assets/logo.png";
import Heart from "../../assets/logo.png";
import NotLike from "../../assets/logo.png";
import axios from "axios";
import { SessionContext } from "../../contexts/SessionContexts";


function Post({ post, setNeedRefresh }) {
  const [comment, setComment] = useState("");
  const {token} = useContext(SessionContext)

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5005/comments/${post._id}`,
        { comment },
        { headers: {Authorization: `Bearer ${token}`}}
      );
      console.log(response.data);
      setNeedRefresh(true)
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
        {post.comments.map((el) =>{  
            return <p>{el.comment}</p>
        })}
      </div>

      <form onSubmit={handleSubmitComment}>
        <input type="text" value={comment} onChange={handleCommentChange} />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}

export default Post;
