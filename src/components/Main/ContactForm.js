import React, { useState, useRef } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('Submit');
  const [response, setResponse] = useState(null);
  const formName = useRef(null);
  const formEmail = useRef(null);
  const formMessage = useRef(null);

  const handleSubmit = async (e) => {
    setResponse(null);
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    let details = {
      name: formName.current.value,
      email: formEmail.current.value,
      message: formMessage.current.value,
    };
    console.log(details);
    fetch('https://nodemailer-myf1.onrender.com/danielforkner', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    });
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    setResponse('Thanks for your message!');
  };

  return (
    <article id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input ref={formName} type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input ref={formEmail} type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea ref={formMessage} id="message" required />
        </div>
        <button className="button" id="submit" type="submit">
          {status}
        </button>
        {response && <div className="response">{response}</div>}
      </form>
    </article>
  );
};

export default ContactForm;
