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
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
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
