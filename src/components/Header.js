import React from 'react';
import Border from './Border';
import background from '/public/images/site/worldmap.svg';

const Header = () => {
  return (
    <header>
      <img className="background-image" src={background} />
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
