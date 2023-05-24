import React, { useContext, useEffect, useState } from 'react'
import './Posts.css'
import {PostsData} from '../../Data/PostsData'
import Post from '../Post/Post'
import axios from 'axios'
import { SessionContext } from '../../contexts/SessionContexts'


function Posts() {
  const [ postData, setPostData ] = useState([])
  const [ needRefresh, setNeedRefresh ] = useState(false)

  const {user} = useContext(SessionContext)
  console.log(user)
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
  useEffect(() => {
    getPosts()
  }, [])
  useEffect(()=>{
    if (needRefresh) {
      getPosts()
      setNeedRefresh(false)
    }
  }, [needRefresh])

  return (
    <div className="Posts">
        {postData.map((el) =>{  
            return <Post post={el} setNeedRefresh={setNeedRefresh} key={el._id}/>
        })}
    </div>
  )
}

export default Posts