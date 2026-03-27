import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaMask } from "react-icons/fa6";
import { SlMustache } from "react-icons/sl";
import { AuthContext } from '../context/AuthContext';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className='navbar'>
        <div className=' ms-5 logo'>

          <NavLink to='/' style={{textDecoration:'none'}}><h4 className='famms '><span className='a'>E</span>thnic<span className='a'>T</span>rend</h4></NavLink>
        </div>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/product'>Product</NavLink></li>
          <li><NavLink to='/blog'>Blog</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          {/* <li><NavLink to='/register'>Register</NavLink></li> */}
          {!isLoggedIn ? (
            <>
              <li><NavLink to='/login'>Login</NavLink></li>
            </>
          ) :
            (
              <li><NavLink to='/login' onClick={() => setIsLoggedIn(false)}>Logout</NavLink></li>
            )
          }

        </ul>
        <div className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu />
        </div>
      </div>



    </>
  )
}
export default Navbar