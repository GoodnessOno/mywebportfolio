import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactform.css';  // Import the CSS file

const Contactform = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          console.error('FAILED...', error);
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );

    e.target.reset();
  };

  return (
    <div className='form'>
    <form ref={form} onSubmit={sendEmail}>
      <h1>CONTACT FORM</h1>
      <label className="field">Name</label>
      <input type="text" name="user_name" className="input" />
      <label className="field">Email</label>
      <input type="email" name="user_email" className="input" />
      <label className="field">Message</label>
      <textarea name="message" className="textarea" />
      <button type="submit" disabled={isSubmitting} className="submit">SEND MESSAGE</button>
      {stateMessage && <p className="message">{stateMessage}</p>}
    </form>
    </div>
  );
};

export default Contactform;


