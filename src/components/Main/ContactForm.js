import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('Submit');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setResponse(null);
    document.getElementById('submit').disabled = true;
    document.getElementById('name').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('message').disabled = true;
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    try {
      let response = await fetch(
        'https://nodemailer-myf1.onrender.com/danielforkner',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(details),
        }
      );
      let result = await response.json();
      console.log(result);
      setResponse(result.message);
    } catch (error) {
      console.error(error);
      setResponse('Something went wrong. Please try again later.');
    } finally {
      setStatus('Submit');
      document.getElementById('submit').disabled = false;
      document.getElementById('name').disabled = false;
      document.getElementById('email').disabled = false;
      document.getElementById('message').disabled = false;
    }
  };

  return (
    <article id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button id="submit" type="submit">
          {status}
        </button>
        {response && <div className="response">{response}</div>}
      </form>
    </article>
  );
};

export default ContactForm;
