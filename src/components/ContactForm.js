import React, { useState } from 'react';

function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop form from submitting the default way

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/myzjwlrw', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <div className="card" style={{marginBottom:'50px'}}>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="contact-input"
          name="name"
          type="text"
          placeholder=" Name"
          required
        />
        <input
          className="contact-input"
          name="email"
          type="email"
          placeholder=" Email"
          required
        />
        <textarea
          className="contact-textarea"
          name="message"
          placeholder=" Message"
          rows="5"
          required
        />
        <button className="submit-contact-form-button" type="submit">
          Send
        </button>
      </form>

      {status === 'SUCCESS' && (
        <p className="success-message">Thanks! Your message has been sent.</p>
      )}
      {status === 'ERROR' && (
        <p className="error-message">Oops! There was a problem. Please try again.</p>
      )}
    </div>
  );
}

export default ContactForm;
