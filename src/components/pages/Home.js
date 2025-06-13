import React, { useEffect, useState } from 'react';
import '../../App.css';
import Footer from '../Footer';
import Popup from 'reactjs-popup';
import Cookies from 'js-cookie';
import { InstagramEmbed } from 'react-social-media-embed';

function Home() {
  const [showPopup, setShowPopup] = useState(true);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hasVisited = Cookies.get('visited');
    const hasConsented = Cookies.get('cookieConsent');

    if (!hasVisited) {
      setShowPopup(true);
      Cookies.set('visited', 'true', { expires: 7 });
    }

    if (!hasConsented) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleCookieConsent = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShowCookieBanner(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwL9Rc5i2cUlGgXaLTxG22Wir8JvD25lVAZgYfMDjIXuCMTKR73Sw0BFnJnpWb78dYlfg/exec', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setSubmitted(true);
      setShowPopup(false);
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  return (
    <>
      <div className="background-texture">
        {/* Auto Popup */}
        <Popup open={showPopup} modal onClose={() => setShowPopup(false)}>
          <section className='newsletter-popup'>
            <p className='newsletter-popup-heading'>
              Join our mailing list to get updated on new music, merch, and show dates!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                className='newsletter-popup-input'
                name='email'
                type='email'
                placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="button-horizontal-wrapper">
                <button className="newsletter-button" type="submit">
                  Submit
                </button>
                <button
                  className="newsletter-button"
                  type="button"
                  onClick={() => setShowPopup(false)}
                >
                  Nah
                </button>
              </div>
            </form>
          </section>
        </Popup>

        
        {/* Main Content */}
        <div className='home-header-image'>
          
        </div>

        <div className="background-layer"></div>

        <div className="main-content-container">
          {/* ... all your existing content ... */}

          <div className="card-title"> <h2>SHOWS</h2> </div>

          <div className='card'>
            <div className="show-card">
              <p>June 14, 2025</p>
              <p>Tractor Tavern, Seattle, WA</p>
              <a href="https://www.ticketweb.com/event/balcony-bridge-w-joyla-red-tractor-tickets/14380603?pl=bk&REFID=subtcal&REFERRAL_ID=tmfeedbuyat253185&wt.mc_id=aff_BUYAT_253185&camefrom=CFC_BUYAT_253185&irgwc=1&clickid=UYA2gvRbSxyKRCFW6Ixm8QQdUksWL421MxZYUw0&impradid=253185&utm_source=253185-DoStuff%20Media&impradname=DoStuff%20Media&utm_medium=affiliate&ircid=4272" target="_blank" rel="noopener noreferrer">
                <button className='show-button'> GET TICKETS </button>
              </a>
            </div>

            <div className="show-card">
              <p>June 21, 2025</p>
              <p>Fremont Fair, Seattle, WA</p>
              <button className='show-button'> FESTIVAL INFO </button>
            </div>

            <div className="show-card">
              <p>July 20, 2025</p>
              <p>Capitol Hill Block Party, Seattle, WA</p>
              <button className='show-button'> GET TICKETS </button>
            </div>

            <div className="show-card">
              <p>July 26, 2025</p>
              <p>Bite Of Seattle, Seattle, WA</p>
              <button className='show-button'> GET TICKETS </button>
            </div>
          </div>

          <div className="card-title"> <h2>MUSIC</h2> </div>
          <div className='card'>
            <div className="music-card">
                <div className="music-cover-doctor">
                </div>
                <p> Doctor (Can you fix me?) </p>
                <div className="music-cover-highandlow">
              </div>
            </div>
          </div>

          <div className="card-title"> <h2>VIDEOS</h2> </div>
          <div className="card">
            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/FBuyfpiz5FM?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          {/*
          <div className="card">
            <h2>STORE</h2>
          </div> */}

          <div className="card-title"> <h2>CONTACT US</h2> </div>
          <div className="card">
            <form className="contact-form">
              <input
                className="contact-input"
                name="name"
                type="text"
                placeholder="Name"
              />
              <input
                className="contact-input"
                name="email"
                type="email"
                placeholder="Email"
              />
              <textarea
                className="contact-textarea"
                name="message"
                placeholder="Message"
                rows="5"
              />
              <button className="submit-contact-form-button" type="submit">
                Send
              </button>
            </form>
          </div>


          {/* <div className="card">
            <h2>Instagram feed</h2>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                height: '120px',
                width: '350px',
                transform: 'scale(0.2)',
                translate: '20px -40%',
                transformOrigin: 'bottom left',
              }}
            >
              <InstagramEmbed url="https://www.instagram.com/p/DJAfp-MT3gM/" />
            </div> */}
          {/* </div> */}
        </div>

        {showCookieBanner && (
          <div className="cookie-popup">
            <div className="cookie-popup-content">
              <p>
                By using this site, you agree to our use of cookies to improve your experience.
              </p>
              <button onClick={handleCookieConsent}>Got it</button>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}

export default Home;
