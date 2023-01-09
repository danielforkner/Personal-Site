import React from 'react';

const About = () => {
  return (
    <article id="about">
      <h2>About</h2>
      <p>
        Software engineer and web developer with a passion for elegant
        functionality. Over 2years of experience utilizing technology to help
        organizations pivot and scale.
      </p>
      {/* <p>
        Recent projects include personal use, classroom demonstrations and aids,
        and more.
      </p>
      <p>
        I love to learn new technologies and utilize projects to solve problems.
      </p>
      <p>
        Currently I am learning .NET by utilizing a Rasperry Pi as a home
        server.
      </p> */}
      <div className="skills-list">
        <p>
          <span className="skill-title">Developing With:</span>{' '}
          <span className="skill">React & Redux</span> |{' '}
          <span className="skill">JavaScript</span> |{' '}
          <span className="skill">Node & Express</span> |{' '}
          <span className="skill">PostgreSQL</span>
        </p>
        <p>
          <span className="skill-title">Learning:</span>{' '}
          <span className="skill">C#</span> |{' '}
          <span className="skill">.NET</span> |{' '}
          <span className="skill">Microservice Architecture</span>
        </p>
        <p>
          <span className="skill-title">Focused On:</span>{' '}
          <span className="skill">Collaboration</span> |{' '}
          <span className="skill">Mentorship</span> |{' '}
          <span className="skill">Communication</span>
        </p>
      </div>
      <div className="text"></div>
    </article>
  );
};

export default About;
