import React from 'react'
import './FollowersCard.css'
import Followers from '../../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div className='FollowersCard'>
        <h3>Who Is Following You </h3>
        {Followers.map((follower,id) =>{
            return(
                <div className="follower" key={id}>
                    <div>
                        <img className='FollowerImg' src={follower.img} alt="follower img"/>
                        <div className="Name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='Button'>
                        Follow
                    </button>
                </div>
            )
            })}
    </div>

  )
}

export default FollowersCard