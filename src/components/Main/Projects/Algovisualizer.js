import React from 'react';

const Algovisualizer = () => {
  return (
    <div id="projects-algovisualizer" className="card">
      <div className="card-header">
        <div className="card-header-text">
          <img className="icon" src="/public/images/algo/icon.png" alt="icon" />
          <div>Project: Algovisualizer</div>
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
                background: "url('/public/images/algo/icon.png')",
                backgroundSize: 'cover',
              }}
            >
              {/* <div className="text">Algovizualizer</div> */}
            </div>
            <img
              src="/public/images/algo/arrays1.png"
              alt="page of the algovizualizer project"
            />
          </div>
          <div className="item">
            <div
              className="overlay"
              style={{
                background: "url('/public/images/algo/icon.png')",
                backgroundSize: 'cover',
              }}
            >
              {/* <div className="text">Algovizualizer</div> */}
            </div>
            <img
              src="/public/images/algo/recursion.png"
              alt="page of the algovizualizer project"
            />
          </div>
          <div className="item">
            <div
              className="overlay"
              style={{
                background: "url('/public/images/algo/icon.png')",
                backgroundSize: 'cover',
              }}
            >
              {/* <div className="text">Algovizualizer</div> */}
            </div>
            <img
              src="/public/images/algo/sorting2.png"
              alt="page of the algovizualizer project"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algovisualizer;
