import React, { useEffect, useState } from 'react';
import '../../App.css';
import ContactForm from '../ContactForm.js';
import Footer from '../Footer';
import Popup from 'reactjs-popup';
import Cookies from 'js-cookie';
import { InstagramEmbed } from 'react-social-media-embed';
import video from '../../old_film_texture.mp4'

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
      console.log('Submitting email:', email);
      await fetch(
        'https://script.google.com/macros/s/AKfycbzCgCQo_NnpxW1rbIitT0blDbVHxJ6TetEwrG7v3gW4g2G2pnN6Cw6VKUnY2HMUZI6B/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({ email }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      setSubmitted(true);
      setShowPopup(false);
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  return (
    <>
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
            <div className='button-horizontal-wrapper'>
              <button className='newsletter-button' type='submit'>
                Submit
              </button>
              <button
                className='newsletter-button'
                type='button'
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
        <video
          className="header-overlay-video"
          src={video}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />

      </div>

      <div className='main-content-container'>
        <div className='background-texture'>
          <div className='card-title' style={{ marginTop: '50px' }}>
            <h2>SHOWS</h2>
          </div>

          <div className='card'>

            <div className='show-card'>
              <p style={{ textAlign: 'left' }}>June 14, 2025</p>
              <p style={{ textAlign: 'left' }}>Tractor Tavern <br/> <p style={{ fontStyle: 'italic', fontSize: '1.8vw', color: '#BABABA'}}> Seattle, WA </p> </p>
              <a
                href='https://www.ticketweb.com/event/balcony-bridge-w-joyla-red-tractor-tickets/14380603?pl=bk&REFID=subtcal&REFERRAL_ID=tmfeedbuyat253185&wt.mc_id=aff_BUYAT_253185&camefrom=CFC_BUYAT_253185&irgwc=1&clickid=UYA2gvRbSxyKRCFW6Ixm8QQdUksWL421MxZYUw0&impradid=253185&utm_source=253185-DoStuff%20Media&impradname=DoStuff%20Media&utm_medium=affiliate&ircid=4272'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='show-button'>
                  <p style={{ fontWeight: 'bold' }}>GET TICKETS</p>
                </button>
              </a>
            </div>

            <div className='show-card'>
              <p style={{ textAlign: 'left' }}>June 21, 2025</p>
              <p style={{ textAlign: 'left' }}>Fremont Fair <br/> <p style={{ fontStyle: 'italic', fontSize: '1.8vw', color: '#BABABA'}}> Seattle, WA </p> </p>
              <a href='https://fremontfair.com/music/'>
                <button className='show-button'>
                  <p style={{ fontWeight: 'bold' }}>FESTIVAL INFO</p>
                </button>
              </a>
            </div>

            <div className='show-card'>
              <p style={{ textAlign: 'left' }}>July 20, 2025</p>
              <p style={{ textAlign: 'left' }}>Capitol Hill Block Party <br/> <p style={{ fontStyle: 'italic', fontSize: '1.8vw', color: '#BABABA'}}> Seattle, WA </p> </p>
              <div className='button-container'>
                <a href='https://www.capitolhillblockparty.com/tickets#'>
                  <button className='show-button'>
                    <p style={{ fontWeight: 'bold' }}>GET TICKETS</p>
                  </button>
                </a>
              </div>
            </div>

            <div className='show-card'>
              <p style={{ textAlign: 'left' }}>July 26, 2025</p>
              <p style={{ textAlign: 'left' }}>Bite Of Seattle <br/> <p style={{ fontStyle: 'italic', fontSize: '1.8vw', color: '#BABABA'}}> Seattle, WA </p> </p>
              <div className='button-container'>
                <a href='https://biteofseattle.com/music-lineup/'>
                  <button className='show-button'>
                    <p style={{ fontWeight: 'bold' }}>FESTIVAL INFO</p>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className='card-title'>
            <h2>MUSIC</h2>
          </div>

          <div className='card'>
            <div className='music-card'>
              <div className='music-container'>
                <div className='music-cover-doctor'></div>
                <div className='music-button-container'>
                  <button className='music-button'>
                    <p style={{ fontWeight: 'bold' }}>PRESAVE</p>
                  </button>
                </div>
                <p style={{ textAlign: 'left', fontStyle: 'italic', marginTop: '4px' }}>
                  Doctor (Can You Fix Me?)
                </p>
                <p style={{ textAlign: 'left', fontStyle: 'italic' }}>2025</p>
              </div>
              <div className='music-container'>
                <div className='music-cover-highandlow'></div>
                <div className='music-button-container'>
                  <a href='https://open.spotify.com/album/3eq0FWthK39gph1FIkaI8R?si=go0uejdJQRq51-oZxB_DJg'>
                    <button className='music-button'>
                      <p style={{ fontWeight: 'bold' }}>LISTEN</p>
                    </button>
                  </a>
                </div>
                <p style={{ textAlign: 'left', fontStyle: 'italic', marginTop: '4px' }}>
                  High and Low
                </p>
                <p style={{ textAlign: 'left', fontStyle: 'italic' }}>2024</p>
              </div>
            </div>
          </div>

          <div className='card-title'>
            <h2>VIDEOS</h2>
          </div>

          <div className='card'>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/FBuyfpiz5FM?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>

          <div className='card-title'>
            <h2>CONTACT US</h2>
          </div>

          <ContactForm />
        </div>
      </div>

      {showCookieBanner && (
        <div className='cookie-popup'>
          <div className='cookie-popup-content'>
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
