import React from 'react';

const Aside = () => {
  const handleToggle = () => {
    const asideToggle = document.querySelector('.aside-toggle');
    const aside = document.querySelector('aside');
    const body = document.querySelector('body');
    asideToggle.classList.toggle('active');
    aside.classList.toggle('active');
    body.classList.toggle('aside-open');
  };

  return (
    <>
      <div onClick={handleToggle} className="aside-toggle">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <aside>
        <nav>
          <ul>
            <li>
              <a href="#About" className="active">
                About
              </a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
              <ul>
                <li>
                  <a href="#CompaniesAPI">Companies API</a>
                </li>
                <li>
                  <a href="#Algovisualizer">Algovisualizer</a>
                </li>
                <li>App Deployment Guide</li>
                <li>Educational Podcast</li>
                <li>Tetris</li>
                <li>Snake</li>
              </ul>
            </li>
            <li>
              <a href="#Resume">Resume</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Aside;
