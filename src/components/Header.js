import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="content-wrapper">
        <div className="content">
          <h2>Daniel Forkner</h2>
          <h3>Professional Software Engineer</h3>
          <div className="skills-list">
            <p>
              <span className="skill-title">Proficient:</span>{' '}
              <span className="skill">React</span> |{' '}
              <span className="skill">JavaScript</span> |{' '}
              <span className="skill">Node & Express</span> |{' '}
              <span className="skill">PostgreSQL</span>
            </p>
            <p>
              <span className="skill-title">Familiar:</span>{' '}
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
