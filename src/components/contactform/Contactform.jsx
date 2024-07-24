// src/ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import './contactform.css';

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaToken(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    const form = e.target;
    const formDataWithRecaptcha = new FormData(form);
    formDataWithRecaptcha.append('g-recaptcha-response', recaptchaToken);

    emailjs.sendForm('service_ver282d', 'template_93fgzvx', formDataWithRecaptcha, '0lNFifeXdul6jFuc7')
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.error('Failed to send email:', error.text);
        alert('Failed to send message.');
      });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setRecaptchaToken('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label>Message:</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <ReCAPTCHA
        sitekey="YOUR_RECAPTCHA_SITE_KEY"
        onChange={handleRecaptchaChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contactform;
