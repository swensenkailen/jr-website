import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Vlog() {
  return (
    <>
      <div className='vlog-header-image'> 
        <h1>Vlog</h1>
      </div>

      <div className='main-content-container'>

        <div class="vlog-entry">
          <div class="thumbnail">
            Thumbnail 1
          </div>
          <div class="description">
            <h2>Vlog Title 1</h2>
            <p>This is a short description of the vlog content. It might include topics discussed, special guests, or other details.</p>
          </div>
        </div>

        <div class="vlog-entry">
          <div class="thumbnail">
            Thumbnail 2
          </div>
          <div class="description">
            <h2>Vlog Title 2</h2>
            <p>This is a short description of the vlog content. It might include topics discussed, special guests, or other details.</p>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Vlog;