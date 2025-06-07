import React from 'react'
import '../../App.css';
import Footer from '../Footer';
import '../Form.css';

function Contact() {
  return (
    <>
      <div className='vlog-header-image'> 
        <h1>Contact</h1>
      </div>

      <div className='main-content-container'>
        <form className='contact-form'>
          <input
              className='contact-input-name'
              name='name'
              type='name'
              placeholder='Name'
            />
                  <input
              className='contact-input-email'
              name='email'
              type='email'
              placeholder='Email'
            />
          <input
              className='contact-input-message'
              name='message'
              type='message'
              placeholder='Message'
            />
          <button className='submit-contact-form-button'>
            
          </button>
          </form>
      </div>

      <Footer />
    </>
  )
}

export default Contact
