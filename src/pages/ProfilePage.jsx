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
    <>
    <h1>Profile</h1>
    {user ? (
      <>
        <p>User ID: {user._id}</p>
        <p>Email: {user.email}</p>
        <p>Name: {user.name}</p>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
      </>
    ) : (
      <p>Loading user data...</p>
    )}
    <button type='button' onClick={logoutUser}>
      Log Out
    </button>
    <Link to="/">Home</Link>
  </>
);
};

export default ProfilePage

