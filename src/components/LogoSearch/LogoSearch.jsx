import React from 'react'
import logo from '../../assets/logo.png'
import './LogoSearch.css'
import {UilSearch} from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        <img className='logo' src={logo} alt='UnifyU' />
        <div className='Search'> 
        <input type='text' placeholder='#Explore'/> 
        <div className='searchicon'><UilSearch /></div>
        </div>
        </div>
  )
}

export default LogoSearch