import React, { useState } from 'react';
import variables from '../../sass/_variables.scss';
import sun from '/public/images/site/sun.svg';
import moon from '/public/images/site/moon.png';

const DarkModeBtn = () => {
  const [mode, setMode] = useState(sun);

  const handleClick = () => {
    const asideToggle = document.querySelector('.aside-toggle');
    const aTags = document.querySelectorAll('aside a');
    const body = document.querySelector('body');
    const aside = document.querySelector('aside');
    const header = document.querySelector('header');
    if (mode === sun) {
      setMode(moon);
      body.classList.add('darkMode');
      aside.classList.add('darkMode');
      header.classList.add('darkMode');
      aTags.forEach((a) => {
        a.style.color = 'white';
      });
    } else {
      setMode(sun);
      body.classList.remove('darkMode');
      aside.classList.remove('darkMode');
      header.classList.remove('darkMode');
      aTags.forEach((a) => {
        a.style.color = 'black';
      });
    }
    asideToggle.classList.remove('active');
    aside.classList.remove('active');
  };

  return <img onClick={handleClick} id="darkModeBtn" src={mode} />;
};

export default DarkModeBtn;
