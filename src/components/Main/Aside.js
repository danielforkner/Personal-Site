import React from 'react';

const Aside = () => {
  return (
    <>
      <div className="aside-toggle">
        <div></div>
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
