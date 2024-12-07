import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import About from './About'

function NavBar() {
  const location = window.location
  return (
    <div className='navbar'>
      {/* <nav className='navbar'>
      <div> */}
        <ul className='MenuItems'>
        <li><NavLink  to="/">Home</NavLink></li>
        <li><NavLink  to="/about">About</NavLink></li>
        <li><NavLink  to="/contact">Contact</NavLink></li>
        {/* <li>  
<a href="#"> Home </a>  
</li>  
<li>  
<a href="/About"> About </a>  
</li>  
<li>  
<a href="#"> Contact </a>  
</li>  
<li> <a href="#"> Terms of use </a>  
</li>  
<li>  
<a href="#"> Join Us </a>  
</li>  */}
        </ul>
      </div>
    // </nav>
    // </div>
  )
}

export default NavBar
