
import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer-container'>
    

      <section className='social-media'>
        <div className='social-media-wrap'>

          <div className='footer-logo' /> 

          <p className='website-rights'>Joyla Red © 2025. All rights reserved.</p>
          
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/joylared'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fa fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/joylared'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fa fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/@joylared'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fa fa-youtube' />
            </a>
            <a
              class='social-icon-link spotify'
              href='https://open.spotify.com/artist/3ozsPuRX2eY5Hvgzvrfjph'
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Spotify'
            >
              <i class='fa fa-spotify' />
            </a>
            <a
              class='social-icon-link tiktok'
              href='https://www.tiktok.com/@joylared'
              target='_blank'
              aria-label='TikTok'
            >
              <div className='tiktok-icon'></div>

            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
