import React, { useContext, useEffect, useState } from 'react'
import './Posts.css'
import {PostsData} from '../../Data/PostsData'
import Post from '../Post/Post'
import axios from 'axios'
import { SessionContext } from '../../contexts/SessionContexts'

function Posts() {
  const [ postData, setPostData ] = useState([])
  const {user} = useContext(SessionContext)
  console.log(user)
  useEffect(() => {
    const getPosts = async() => {
      try {
        const response = await axios.get(`http://localhost:5005/posts/${user._id}/timeline`)
      if(response){
        console.log(response.data)
        setPostData(response.data)
      }
      } catch (error) { 
        console.log(error)
      }
    }
    getPosts()
  }, [])
  return (
    <div className="Posts">
        {postData.map((el) =>{
            return <Post post={el} key={el._id}/>
        })}
    </div>
  )
}

export default Posts