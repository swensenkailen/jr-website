import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Discography() {
  return (
    <>
      <div className='discography-header-image'>
        <h1>Discography</h1>
      </div>
      
      <div className='main-content-container'>  
        <div className='spotify-wrapper'>
        <iframe 
          src="https://open.spotify.com/embed/album/3eq0FWthK39gph1FIkaI8R?utm_source=generator&theme=0" 
          width="90%" 
          height="152" 
          frameBorder="0" 
          allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Discography;