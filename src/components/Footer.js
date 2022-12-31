import React from 'react';

const Footer = () => {
  const handleHide = () => {
    const footer = document.querySelector('.footer');
    footer.classList.add('footer-hide');
  };

  return (
    <footer className="footer">
      <div className="footer-center">
        <div className="footer-text">Connect with me</div>
        <div className="footer-icons"> LinkedIn | GitHub | Email</div>
      </div>
      <div onClick={handleHide} className="footer-right">
        X
      </div>
    </footer>
  );
};

export default Footer;
