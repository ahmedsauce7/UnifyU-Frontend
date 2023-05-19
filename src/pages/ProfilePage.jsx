import { useContext } from 'react'
import { SessionContext } from '../contexts/SessionContexts'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
  const { logout, isLoggedIn } = useContext(SessionContext)
  const navigate = useNavigate();
  const logoutUser = () => {
    logout();
    navigate('/')
  }

  return (
    <>
      <h1>Profile</h1>
      <button type='button' onClick={logoutUser}>
        Log Out
      </button>
    </>
  )
}

export default ProfilePage

