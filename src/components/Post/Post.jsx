import React, { useContext, useState } from "react";
import "./Post.css";
import axios from "axios";
import { SessionContext } from "../../contexts/SessionContexts";

function Post({ post, setNeedRefresh }) {
  const [comment, setComment] = useState("");
  const {token} = useContext(SessionContext)
  const [editing, setEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(post.description);

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
      setComment("");
      setNeedRefresh(true)
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5005/posts/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNeedRefresh(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditDescription = () => {
    setEditing(true);
  };

  const handleUpdateDescription = async () => {
    try {
      await axios.put(
        `http://localhost:5005/posts/${post._id}`,
        { description: updatedDescription },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditing(false);
      setNeedRefresh(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelUpdate = () => {
    setEditing(false);
    setUpdatedDescription(post.description);
  };

  const handleUpdatedDescriptionChange = (event) => {
    setUpdatedDescription(event.target.value);
  };

  if (!post) {
    return <p>Loading..........!!!</p>;
  }

  return (
    <div className="Post">
      {/* <img src={post.picture} alt="Post" /> */}
      <div className="PostReact">
      </div>
      <div>
        <h2>
          {post.firstName} {post.lastName}
        </h2>
        <p>
          Description: {editing ? updatedDescription : post.description}
          <p>{post.comments}</p>
        </p>
        {post.comments.map((el) =>{  
            return <p>{el.comment}</p>;
        })}
      <button
          className="ReactButton"
          onClick={() => handleDeletePost(post._id)}
        >
          Delete
        </button>
        {!editing ? (
          <button className="ReactButton" onClick={handleEditDescription}>
            Edit
          </button>
        ) : (
          <div>
            <textarea
              value={updatedDescription}
              onChange={handleUpdatedDescriptionChange}
            />
            <button className="ReactButton" onClick={handleUpdateDescription}>
              Save
            </button>
            <button className="ReactButton" onClick={handleCancelUpdate}>
              Cancel
            </button>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmitComment}>
  <input type="text" value={comment} onChange={handleCommentChange} />
  <button type="submit">Submit Comment</button>
</form>
    </div>
  );
}
export default Post;
