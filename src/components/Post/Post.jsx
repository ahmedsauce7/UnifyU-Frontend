import React from 'react'
import './Post.css'
import Comment from '../../assets/logo.png'
import Share from '../../assets/logo.png'
import Heart from '../../assets/logo.png'
import NotLike from '../../assets/logo.png'

function Post({post}) {
  if(!post){
    return <p>Loading..........!!!</p>
  }
  return (
    <div className="Post">
{/* <img src={post.img} alt="Post Img" /> */}
{/* add img to it */}


<div className="PostReact">
    <img className='ReactIcons' src={post.likes?Heart: NotLike} alt="Like" />
    <img className='ReactIcons' src={Comment} alt="Comment" />
    <img className='ReactIcons' src={Share} alt="Share" />
</div>
<div>
  <p>desc:{post.description}</p>
</div>

<span>{post.likes}Likes</span>

<div className="Details">
    {/* <span><b>{post.name}</b></span>
    <span> {data.desc}</span> */}
</div>
</div>
  )
}

export default Post