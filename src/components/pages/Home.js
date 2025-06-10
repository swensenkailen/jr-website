import React, { useEffect, useState } from 'react';
import '../../App.css';
import Footer from '../Footer';
import Popup from 'reactjs-popup';
import Cookies from 'js-cookie';
import { InstagramEmbed } from 'react-social-media-embed';

function Home() {
  const [showPopup, setShowPopup] = useState(true);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

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

  return (
    <>

      {/* Auto Popup */}
      <Popup open={showPopup} modal onClose={() => setShowPopup(false)}>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join our mailing list to get updated on new music, merch, and show dates!
          </p>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
          </form>

          <div className="button-horizontal-wrapper">
            <button className="button-mailing-list">
              Submit
            </button>
            <button className="button-mailing-list">
              Nah
            </button>

          </div>
        </section>
      </Popup>

      {/* Main Content */}
      <div className="videoWrapper">
        <div className="home-header-video">
          Home
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FBuyfpiz5FM?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="main-content-container">
        {/* ... all your existing content ... */}
        <div className="card">
          <h2>ABOUT THE BAND</h2>
          <p>Modern vintage rock band from Seattle, WA.</p>
        </div>

        <div className="card">
          <h2>LATEST RELEASE</h2>
          <iframe
            src="https://open.spotify.com/embed/album/3eq0FWthK39gph1FIkaI8R?utm_source=generator&theme=0"
            height="100"
            width="95%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <div className="card">
          <h2>UPCOMING SHOWS</h2>
          <p>6/14 @ Tractor Tavern - Seattle, WA</p>
          <p>7/20 @ Capitol Hill Block Party - Seattle, WA</p>
        </div>

        {/* <div className="card">
          <h2>MUSIC VIDEOS</h2>
          <iframe
            width="100"
            height="100"
            src="https://www.youtube.com/embed/FBuyfpiz5FM?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            width="100"
            height="100"
            src="https://www.youtube.com/embed/FBuyfpiz5FM?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

        <div className="card">
          <h2>STORE</h2>
        </div> */}

        <div className="card">
          <h2>CONTACT US</h2>
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
    </>
  );
}

export default Home;
