import React from 'react';
import certAAI from '/public/images/about/Cert-AAI.png';
import certCCP from '/public/images/about/Cert-CCP.png';
import certSAA from '/public/images/about/Cert-SAA.png';
import certCDA from '/public/images/about/Cert-CDA.png';

const About = () => {
  return (
    <article id="about">
      <h2>About</h2>
      <p style={{ marginBottom: '1rem'}}>
        Software engineer and cloud engineer with a proven track record in building and troubleshooting modern cloud applications. Solutions-driven and passionate about optimizing customer experiences. Exceptional communicator, adept at translating the business impact of complex systems into relatable terms for both customers and executive leadership.
      </p>
      <p>
        My current role is <b>Senior Software Engineer</b> at F500 CarMax where I deliver and maintain the services that keep customer data flowing throughout the enterprise.
      </p>
      <div className="skills-list">
        <p>
          <span className="skill-title">Developing With:</span>{' '}
          <span className="skill">React</span> |{' '}
          <span className="skill">C#</span> |{' '}
          <span className="skill">Python</span> |{' '}
          <span className="skill">.NET</span> |{' '}
          <span className="skill">JavaScript</span> |{' '}
          <span className="skill">Node & Express</span> |{' '}
          <span className="skill">SQL</span>
        </p>
        <p>
          <span className="skill-title">Deploying on:</span>{' '}
          <span className="skill">Azure</span> |{' '}
          <span className="skill">AWS</span>
        </p>
        <p>
          <span className="skill-title">Building AI Agents:</span>{' '}
          <span className="skill">MCP Servers & MCP Clients</span> |{' '}
          <span className="skill">Azure AI Foundry & Customer Models</span> |{' '}
          <span className="skill">Claude Code</span>
        </p>
      </div>
      <a className="button" href="#contact">
        CONTACT ME
      </a>
      <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
        Certified AWS Authorized Instructor (AAI)
      </p>  
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
        <a
          href="https://www.credly.com/badges/2ad382d3-8462-4d3d-b3d4-e4a1e1fc7d72"
          target="_blank"
          alt="AWS Cert"
        >
          <img src={certAAI} width="100" />
        </a>
        <a
          href="https://www.credly.com/badges/ca61f1fc-3432-4580-825c-1205134b9857"
          target="_blank"
          alt="AWS Cert"
        >
          <img src={certSAA} width="100" />
        </a>
        <a
          href="https://www.credly.com/badges/5be2ba8b-fb30-4f29-9a09-0a34d0749938"
          target="_blank"
          alt="AWS Cert"
        >
          <img src={certCDA} width="100" />
        </a>
        <a
          href="https://www.credly.com/badges/9f3ab7d5-2408-499e-bb86-7f8bcbb6d94e"
          target="_blank"
          alt="AWS Cert"
        >
          <img src={certCCP} width="100" />
        </a>
      </div>
    </article>
  );
};

export default About;
