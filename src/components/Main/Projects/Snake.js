import React from 'react';

const Snake = () => {
  return (
    <div id="projects-snake" className="card">
      <div className="card-header">
        <div className="card-header-text">
          <img
            className="icon"
            src="/public/images/snake/icon.png"
            alt="icon"
          />
          <div>Project: Snake</div>
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
                background: "url('/public/images/snake/icon.png')",
                backgroundSize: 'cover',
              }}
            >
              {/* <div className="text">App Deployment Guide</div> */}
            </div>
            <img
              src="/public/images/snake/snake1.png"
              alt="page of the snake game"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snake;
