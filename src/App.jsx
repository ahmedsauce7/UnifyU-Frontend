import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import IsPrivate from './components/isPrivate'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={< HomePage />} />
    <Route path='/signup' element={<SignupPage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/profile' element={<IsPrivate><ProfilePage /></IsPrivate>}/>
  </Routes>
  </div>
  )
}

export default App
