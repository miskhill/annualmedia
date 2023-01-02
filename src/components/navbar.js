import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { userIsAuthenticated } from './utils/helper.js'
import axios from 'axios'
import { getTokenFromLocalStorage } from './utils/helper.js'

const NavBar = () => {

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
  }, [location.pathname])

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    navigate.push('/')
  }

  const [ user, setUser ] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          '/api/user',
          {
            headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
          })
        setUser(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  // if user is logged in, should display logout button/code instead of login/register
  // background image and styling
  return (
    <div id='navbar'>
      <div id="navwrap">
        <Link to="/" id="navLink">Home</Link>
        <Link to="/movies" id="navLink">Movie</Link>
        {
          user.username === 'admin' ? 
            <Link to="/AdminUpload" id="navLink">Admin Upload</Link>
            :
            <>
            </>
        }
        {
          userIsAuthenticated() ? 
            <span id="navLinkLogout" onClick={handleLogout}>Logout</span>
            :
            <>
              <Link to="/signIn" id="navLink">Sign In</Link>
              <Link to="/signUp" id="navLink">Sign Up</Link>
            </>
        }
      </div>
    </div>
  )
}
export default NavBar