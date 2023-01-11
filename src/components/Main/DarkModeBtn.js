import React, { useState } from 'react';
import variables from '../../sass/_variables.scss';
import sun from '/public/images/site/sun.svg';
import moon from '/public/images/site/moon.png';

const DarkModeBtn = () => {
  const [mode, setMode] = useState(sun);

  const handleClick = () => {
    console.log(variables);
    const aTags = document.querySelectorAll('aside a');
    const body = document.querySelector('body');
    if (mode === sun) {
      setMode(moon);
      body.classList.add('darkMode');
      aTags.forEach((a) => {
        a.style.color = 'white';
      });
    } else {
      setMode(sun);
      body.classList.remove('darkMode');
      aTags.forEach((a) => {
        a.style.color = 'black';
      });
    }
  };

  return <img onClick={handleClick} id="darkModeBtn" src={mode} />;
};

export default DarkModeBtn;
