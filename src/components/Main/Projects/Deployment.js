// https://docs.google.com/document/d/e/2PACX-1vSco_jTstkQpm7ex87DB5om8OZPaWoI85tIWLwVrstSRNy9Fb6gz3jtLuFhb3SI38S00lRg1eSbLb4g/pub

import React from 'react';

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
          <div>Project: App Deployment Guide</div>
        </div>
        <ul className="card-header-links">
          <li className="card-header-link">
            <a href="#">Deploy</a>
          </li>
          <li className="card-header-link">
            <a href="#">GitHub</a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <p></p>
        <div className="grid">
          <div className="item">
            <div
              className="overlay"
              style={{
                background: "url('/public/images/deployment/icon.png')",
                backgroundSize: 'cover',
              }}
            >
              {/* <div className="text">App Deployment Guide</div> */}
            </div>
            <img
              src="/public/images/deployment/deployment.png"
              alt="still of a youtube video of the deployment project"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deployment;
