import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import './Navbar.css'
// import logo from '../images/image-logo.png'
import 'font-awesome/css/font-awesome.min.css';

function Navbar() {
  const [click, setClick] = useState(false);

  // toggle logic
  const handleClick = () => setClick(!click);

  // open/close hamburger menu
  const closeMenu = () => setClick(false);

  //

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' /> 

          <div className='menu-icon' onClick = {handleClick}>
            <i className ={click ? 'fa fa-times' : 'fa fa-bars'} />
          </div>
          
          <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/biography' className='nav-links' onClick={closeMenu}>
                ABOUT
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/discography' className='nav-links' onClick={closeMenu}>
                MUSIC
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/shows' className='nav-links' onClick={closeMenu}>
                SHOWS
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMenu}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
