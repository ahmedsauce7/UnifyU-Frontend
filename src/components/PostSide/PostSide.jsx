import React, { useState } from 'react'
import './PostSide.css'
import { PostShare } from '../PostShare/PostShare'
import Posts from '../Posts/Posts'


const PostSide = () => {
  const [needRefresh, setNeedRefresh] = useState(false)
  return (
    <div className="PostSide">
        <PostShare setNeedRefresh={setNeedRefresh}/>
        <Posts needRefresh={needRefresh} setNeedRefresh={setNeedRefresh}/>
    </div>
  )
}

export default PostSide