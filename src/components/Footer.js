
import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer-container'>
    

      <section className='social-media'>
        <div className='social-media-wrap'>

          <Link to="/" className='footer-logo' /> 

          <small className='website-rights'>Joyla Red © 2025</small>
          
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fa fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fa fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fa fa-youtube' />
            </a>
            <a
              class='social-icon-link spotify'
              href='/'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Spotify'
            >
              <i class='fa fa-spotify' />
            </a>
            <a
              class='social-icon-link tiktok'
              href='/'
              target='_blank'
              aria-label='TikTok'
            >
              <i class='fa fa-bandcamp' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
