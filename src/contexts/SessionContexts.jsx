import { useLocalStorage } from '@mantine/hooks'
import { createContext, useContext, useEffect, useState } from 'react'


const SessionContext = createContext()
const SessionContextProvider = ({ children }) => {
  // const [token, setToken] = useLocalStorage({ key: 'authToken' })
  const [token, setToken] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null);

  const verifyToken = async currentToken => {
    const response = await fetch('http://localhost:5005/auth/verify', {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    })
    if (response.ok) {
      const parsed = await response.json()
      setToken(currentToken)
      setIsLoggedIn(true)
      setUser(parsed)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    const localToken = localStorage.getItem('authToken')
    if (localToken) {
      verifyToken(localToken)
    }
  }, [])

  useEffect(() => {
    console.log(isLoggedIn, "testing")
    if (token) {
      localStorage.setItem('authToken', token)
      
    } else {
      localStorage.removeItem('authToken')
      
    }
  }, [token])

  const logout = () => {
    setToken()
    localStorage.removeItem('authToken')
    setIsLoggedIn(false)
  }

  return (
    <SessionContext.Provider value={{ token, user, setUser, setToken, isLoggedIn, setIsLoggedIn, isLoading, logout }}>
      {children}
    </SessionContext.Provider>
  )
}

export {SessionContextProvider, SessionContext}