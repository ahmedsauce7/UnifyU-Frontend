import React from 'react'
import PostSide from '../components/PostSide/PostSide'
import ProfileSide from '../components/Profile/ProfileSide'
import './HomePage.css'
import RightSide from '../components/RightSide/RightSide'

function HomePage() {
  return (
    <div className='HomePage'>
      <ProfileSide/>
      <PostSide/>
      <RightSide/>
    </div>
  )
}

export default HomePage