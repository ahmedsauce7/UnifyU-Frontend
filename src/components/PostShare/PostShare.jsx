import React, {useState, useRef, useContext} from 'react'
import './PostShare.css'
import profileimg from '../../assets/pic.jpg'
import './PostShare.css'
import {UilScenery,UilPlayCircle,UilLocationPoint,UilSchedule,UilTimes} from "@iconscout/react-unicons"
import axios from 'axios'
import { SessionContext } from '../../contexts/SessionContexts'


export const PostShare = ({setNeedRefresh}) => {
    const [image, setImage] = useState(null)
    const [text, setText] =useState("")
    const [firstName, setFirstName] =useState("")
    const [lastName, setLastName] = useState("")
    const [description, setDescription] =useState("")
    const [picture, setPicture] =useState("")
    const [likes, setLikes] =useState("")
    const [comments, setComments] =useState("")
    const uploadImg = useRef()
    const {token} = useContext(SessionContext)
    
    const onImageChange = (event) =>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0]
            setImage({
                image:URL.createObjectURL(img)
            });
        }
    }

    const handlePostChange = (event) => {
        setDescription(event.target.value);
      };
    
      const handleSubmitPost = async (event) => {
        event.preventDefault();

        try {
          const response = await axios.post(
            "http://localhost:5005/posts/",
            { description },
            { headers: {Authorization: `Bearer ${token}`}}
          );
          console.log(response.data);
          setNeedRefresh(true)
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div className="PostShare">
        <img className="postsimg" src={profileimg} alt="profile img" />
    <div>
    <div className="PostOptions">
        <div className="Option" onClick={()=>uploadImg.current.click()}>
            <UilScenery/> 
            Photo
        </div>
        <label>
        </label>
        <form onSubmit={handleSubmitPost}>
        <input type="text" value={description} onChange={handlePostChange} />
        <button type="submit">Share Post</button>
      </form>
        <div style={{display: "none"}}>
            <input type="file" name='myImage' ref={uploadImg} onChange={onImageChange} />
        </div>
    </div>
    {image && (
        <div className="PreviewImage">
            <UilTimes onClick={()=>setImage(null)}/>
            <img src={image.image} alt="Upload img" />
        </div>
    )}
    </div>
    </div>
  )
}

