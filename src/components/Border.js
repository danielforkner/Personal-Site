import React from 'react';

const Border = () => {
  return (
    <div id="hero-border">
      <div className="border-content-wrapper">
        <div className="border-content">
          <div className="content-left">
            I am a professional software engineer and web developer with a
            passion for elegant functionality.
          </div>
          <div className="content-right">
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
      </div>
    </div>
  );
};

export default Border;
