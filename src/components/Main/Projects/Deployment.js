import React from 'react';
import CardText from '../Cards/CardText';
import CardImgGrid from '../Cards/CardImgGrid';

const Deployment = () => {
  return (
    <div id="projects-deployment" className="card">
      <div className="card-header">
        <div className="card-header-text">
          <img
            className="icon"
            src="/public/images/deployment/icon.png"
            alt="icon"
            style={{ filter: 'invert(1)', border: '1px solid black' }}
          />
          <div>App Deployment Guide</div>
        </div>
        <ul className="card-header-links">
          <li className="card-header-link">
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vSco_jTstkQpm7ex87DB5om8OZPaWoI85tIWLwVrstSRNy9Fb6gz3jtLuFhb3SI38S00lRg1eSbLb4g/pub"
              target="_blank"
            >
              Guide
            </a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <CardText
          description="A guide to deploying a full stack application to the web."
          overview="This project is in response to Heroku's recent announcement that they will no longer be offering free dynos, which had an impact on several stakeholders at Fullstack Academy, including their 8,000+ alumni community, current student body, instructional staff, and product engineers. This guide provides a step-by-step process for deploying a full stack application to the web using alternative free hosting services Render and bit.io."
          tech="Google Docs, Project Management, Technical Writing"
        />
        <div className="card-body-section">
          <h3>Demonstration Video</h3>
          {/* <iframe
            height="250px"
            src="https://www.youtube.com/embed/LTC9VhqlR0g"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe> */}
        </div>
        <CardImgGrid imgFolder="deployment" images={['deployment.png']} />
      </div>
    </div>
  );
};

export default Deployment;
