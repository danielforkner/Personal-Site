import React from 'react';
import Border from './Border';

const Header = () => {
  return (
    <header>
      <div className="background-image"></div>
      <div className="content-wrapper">
        <div className="content">
          <h2>Daniel Forkner</h2>
          <h3>Software Engineer</h3>
        </div>
      </div>
      {/* <Border /> */}
    </header>
  );
};

export default Header;
