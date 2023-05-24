import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContexts'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const ProfilePage = () => {
  const { userId } = useParams();
  const { logout, isLoggedIn, isLoading } = useContext(SessionContext)
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

    useEffect(()=> {
      const getData = async () => {
        try {
          const response = await axios.get(`http://localhost:5005/${userId}`)
          const userData = response.data;
          setUserData(userData)
        } catch (error) {
          console.log(error)
        }
      }
     getData();
    },[userId]);

    const logoutUser = () => {
      logout();
      navigate('/login')
    }


  return (
    <>
    <h1>Profile</h1>
    {userData ? (
      <>
        <p>User ID: {userData.id}</p>
        <p>Email: {userData.email}</p>
        <p>Name: {userData.name}</p>
        <p>First Name: {userData.firstName}</p>
        <p>Last Name: {userData.lastName}</p>
      </>
    ) : (
      <p>Loading user data...</p>
    )}
    <button type='button' onClick={logoutUser}>
      Log Out
    </button>
  </>
);
};

export default ProfilePage

