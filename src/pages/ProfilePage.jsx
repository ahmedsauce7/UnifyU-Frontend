import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContexts'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const ProfilePage = () => {
  const { logout, user } = useContext(SessionContext)
  const navigate = useNavigate();

    const logoutUser = () => {
      logout();
      navigate('/login')
    }


  return (
    <> <div className="profile">
    <h1>Profile</h1>
    {user ? (
      <>
        {/* <p>User ID: {user._id}</p> */}
        <p>Email: {user.email}</p>
        <p>Username: {user.name}</p>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
      </>
    ) : (
      <p>Loading user data...</p>
    )}
    </div>
    <div className='profilebtn'>
    <button className='Button' type='button' onClick={logoutUser}>
      Log Out
    </button>
    <Link className='Button' to="/">Home</Link>
    </div>
  </>
  
);
};

export default ProfilePage

