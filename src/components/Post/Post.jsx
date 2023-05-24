import React from 'react'
import './Post.css'
import Comment from '../../assets/logo.png'
import Share from '../../assets/logo.png'
import Heart from '../../assets/logo.png'
import NotLike from '../../assets/logo.png'

function Post({data}) {
  return (
    <div className="Post">
<img src={data.img} alt="Post Img" />


<div className="PostReact">
    <img className='ReactIcons' src={data.liked?Heart: NotLike} alt="Like" />
    <img className='ReactIcons' src={Comment} alt="Comment" />
    <img className='ReactIcons' src={Share} alt="Share" />
</div>


<span>{data.likes}Likes</span>

<div className="Details">
    <span><b>{data.name}</b></span>
    <span> {data.desc}</span>
</div>
</div>
  )
}

export default Post