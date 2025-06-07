import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Biography() {
  return (
    <>
      <div className='biography-header-image'> 
        <h1>Bio</h1>
      </div>

      <div className='main-content-container'>
        <div className='biography-text'>
          <p>          Joyla Red is a Seattle-based quintet that fuses the melodic depth of 70s pop with the raw energy of 90s rock, creating a sound that feels both nostalgic and fresh. Fronted by the captivating Siahna Im (formerly of NBC’s The Voice) with a rich contralto, the band draws inspiration from the likes of Fleetwood Mac, David Bowie, and Mazzy Star. Known for their dynamic live shows and introspective lyrics, Joyla Red’s music seamlessly blends vintage guitar riffs, powerful rhythms, and lush harmonies, echoing the spirit of Seattle’s musical legacy while forging a unique path of their own.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Biography;