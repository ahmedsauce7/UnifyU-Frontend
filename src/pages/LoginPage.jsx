import { useContext, useState } from 'react'
import { SessionContext } from '../contexts/SessionContexts'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'



const LoginPage = () => {
  const navigate = useNavigate()
  const { setToken, setIsLoggedIn, setUser } = useContext(SessionContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    if (response.status === 200) {
      const tokenFromResponse = await response.json()
      setToken(tokenFromResponse.authToken)
      setIsLoggedIn(true)
      setUser(tokenFromResponse.foundUser)
      navigate('/profile')
    }
  }

  return (
    <> 
    <div className="login">
    <Link className='Button' to='/'>Home</Link>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type='email'
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            required
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type='submit'>Log In</button>
      </form>
      </div>
    </>
  )
}

export default LoginPage