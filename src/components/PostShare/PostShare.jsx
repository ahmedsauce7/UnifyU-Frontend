import React, {useState, useRef} from 'react'
import './PostShare.css'
import profileimg from '../../assets/pic.jpg'
import './PostShare.css'
import {UilScenery,UilPlayCircle,UilLocationPoint,UilSchedule,UilTimes} from "@iconscout/react-unicons"


export const PostShare = () => {
    const [image, setImage] = useState(null)
    const uploadImg = useRef()
    const onImageChange = (event) =>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0]
            setImage({
                image:URL.createObjectURL(img)
            });
        }
    }
  return (
    <div className="PostShare">
        <img src={profileimg} alt="profile img" />
    <div>
        <input type='text' placeholder='Tell me your issues'/>
    <div className="PostOptions">
        <div className="Option" onClick={()=>uploadImg.current.click()}>
            <UilScenery/> 
            Photo
        </div>
        <div className="Option">
            <UilPlayCircle/> 
            Video
        </div>{" "}
        <div className="Option">
            <UilLocationPoint/> 
            Location
        </div>{" "}
        <div className="Option">
            <UilSchedule/> 
            Schedule
        </div>
        <button className='Button'>
            Share
        </button>
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
