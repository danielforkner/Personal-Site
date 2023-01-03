import React from 'react';

const ImageGrid = () => {
  return (
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
          src="/public/images/algo/sorting1.png"
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
      <div className="item">
        <div
          className="overlay"
          style={{
            background: "url('/public/images/companies/icon2.png')",
            backgroundSize: 'cover',
          }}
        >
          {/* <div className="text">REST API</div> */}
        </div>
        <img
          src="/public/images/companies/companies1.png"
          alt="page of the companies api project"
        />
      </div>
      <div className="item">
        <div
          className="overlay"
          style={{
            background: "url('/public/images/companies/icon1.png')",
            backgroundSize: 'cover',
          }}
        >
          {/* <div className="text">REST API</div> */}
        </div>
        <img
          src="/public/images/companies/companies2.png"
          alt="page of the companies api project"
        />
      </div>
      <div className="item">
        <div
          className="overlay"
          style={{
            background: "url('/public/images/tetris/icon.png')",
            backgroundSize: 'cover',
          }}
        >
          {/* <div className="text">Tetris Game</div> */}
        </div>
        <img
          src="/public/images/tetris/tetris3b.png"
          alt="page of the falling blocks game"
        />
      </div>
      <div className="item">
        <div
          className="overlay"
          style={{
            background: "url('/public/images/tetris/icon.png')",
            backgroundSize: 'cover',
          }}
        >
          {/* <div className="text">Tetris Game</div> */}
        </div>
        <img
          src="/public/images/tetris/tetris2b.png"
          alt="page of the falling blocks game"
        />
      </div>
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
      <div className="item">
        <div
          className="overlay"
          style={{
            background: "url('/public/images/ashes/icon.webp')",
            backgroundSize: 'cover',
          }}
        >
          {/* <div className="text">App Deployment Guide</div> */}
        </div>
        <img
          src="/public/images/ashes/ashesashes.png"
          alt="logo of the ashes ashes project"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
