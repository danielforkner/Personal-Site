import React from 'react';
import linkedin from '/public/images/site/linkedin.svg';
import github from '/public/images/site/github.svg';

const Footer = () => {
  const handleHide = () => {
    const footer = document.querySelector('.footer');
    footer.classList.add('footer-hide');
  };

  return (
    <footer className="footer">
      <div className="footer-center">
        <div className="footer-text">Connect </div>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/danielforkner/" target="_blank">
            <img src={linkedin} alt="linkedin logo" />
          </a>
          <a
            href="https://github.com/danielforkner/Personal-Site"
            target="_blank"
          >
            <img src={github} alt="github logo" />
          </a>
        </div>
      </div>
      <div onClick={handleHide} className="footer-right">
        X
      </div>
    </footer>
  );
};

export default Footer;
