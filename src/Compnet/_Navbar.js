import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
const _Navbar = () => {
  return (
    <>
      <div className='Navbar'>
        <div className='Main_logo'>
          <Link to="/"><li>Aniket</li></Link>
        </div>
        <div className='Nav-menu'>
          <div className='Nav-list'>
            <Link to="/About"><li>About</li></Link>
            <Link to="/Product"><li>Product</li></Link>
            <Link to="/Contact"><li>Contact</li></Link>
            <Link to="/Cart"><li><BsCart4 className='Cart' /></li></Link>
          </div>
          <div className='login'>
            <button className='login-button'>Log in</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default _Navbar
