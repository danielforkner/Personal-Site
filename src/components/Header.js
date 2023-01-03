import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="content-wrapper">
        <div className="content">
          <h2>Daniel Forkner</h2>
          <h3>Software Engineer</h3>
          <div className="skills-list">
            <p>
              <span className="skill-title">Favorite Stack:</span>{' '}
              <span className="skill">React</span> |{' '}
              <span className="skill">JavaScript</span> |{' '}
              <span className="skill">Node & Express</span> |{' '}
              <span className="skill">PostgreSQL</span>
            </p>
            <p>
              <span className="skill-title">Learning:</span>{' '}
              <span className="skill">C#</span> |{' '}
              <span className="skill">.NET</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
