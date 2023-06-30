import React from 'react';

const About = () => {
  return (
    <article id="about">
      <h2>About</h2>
      <p>
        Software engineer and web developer with a passion for elegant
        functionality. Experience utilizing technology to help organizations
        pivot and scale.
      </p>
      <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
        AWS Authorized Instructor (AAI)
      </p>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
        <a
          href="https://www.credly.com/badges/2ad382d3-8462-4d3d-b3d4-e4a1e1fc7d72"
          target="_blank"
          alt="AWS Cert"
        >
          <img src="/images/about/Cert-AAI.png" width="100" />
        </a>
        <a
          href="https://www.credly.com/badges/ca61f1fc-3432-4580-825c-1205134b9857"
          target="_blank"
          alt="AWS Cert"
        >
          <img src="/images/about/Cert-SAA.png" width="100" />
        </a>
        <a
          href="https://www.credly.com/badges/9f3ab7d5-2408-499e-bb86-7f8bcbb6d94e"
          target="_blank"
          alt="AWS Cert"
        >
          <img src="/images/about/Cert-CCP.png" width="100" />
        </a>
      </div>
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
          <span className="skill">PostgreSQL</span> |{' '}
          <span className="skill">TDD (Jest)</span>
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
      <a className="button" href="#contact">
        CONTACT ME
      </a>
    </article>
  );
};

export default About;
