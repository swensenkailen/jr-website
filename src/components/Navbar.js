import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    
    <nav className='navbar'>

      <div className='navbar-container'>
        <ScrollLink
          to='home'
          smooth={true}
          duration={500}
          className='navbar-logo'
          onClick={closeMenu}
        >
          {/* Replace with logo or text if needed */}
        </ScrollLink>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <ScrollLink
              to='shows'
              smooth={true}
              duration={500}
              className='nav-links'
              onClick={closeMenu}
            >
              SHOWS
            </ScrollLink>
          </li>
          <li className='nav-item'>
            <ScrollLink
              to='music'
              smooth={true}
              duration={500}
              className='nav-links'
              onClick={closeMenu}
            >
              MUSIC
            </ScrollLink>
          </li>
          <li className='nav-item'>
            <ScrollLink
              to='videos'
              smooth={true}
              duration={500}
              className='nav-links'
              onClick={closeMenu}
            >
              VIDEOS
            </ScrollLink>
          </li>
          <li className='nav-item'>
            <ScrollLink
              to='contact'
              smooth={true}
              duration={500}
              className='nav-links'
              onClick={closeMenu}
            >
              CONTACT
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
