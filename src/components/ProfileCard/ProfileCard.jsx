import React from 'react'
import profileimg from '../../assets/pic.jpg'
import coverimg from '../../assets/cover.jpg'
import '../ProfileCard/ProfileCard.css'

function ProfileCard() {
  return (
    <div className='ProfileCard'>
      <div className="ProfileImages">
      <img src={coverimg} alt='cover img'/>
        <img src={profileimg} alt='profile img'/>
        </div>
        <div className="ProfileName">
          <span>Imaginary</span>
          <span>GirlFriend</span>
      </div>
      <div className="followStatus">
        <hr/>
        <div>
          <div className="follow">
            <span>800</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
          <span>1</span>
            <span>Followers</span>
          </div>
        </div>
        <hr/>
      </div>
      <span className='myProfile'>My Profile</span>
    </div>
  )
}

export default ProfileCard