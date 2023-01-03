import React from 'react';

const ImageGrid = () => {
  const elements = [
    // <div className="item" key="0">
    //   <div
    //     className="overlay"
    //     style={{
    //       background: "url('/public/images/algo/icon.png')",
    //       backgroundSize: 'cover',
    //     }}
    //   >
    //     {/* <div className="text">Algovizualizer</div> */}
    //   </div>
    //   <img
    //     src="/public/images/algo/arrays1.png"
    //     alt="page of the algovizualizer project"
    //   />
    // </div>,
    // <div className="item" key="1">
    //   <div
    //     className="overlay"
    //     style={{
    //       background: "url('/public/images/algo/icon.png')",
    //       backgroundSize: 'cover',
    //     }}
    //   >
    //     {/* <div className="text">Algovizualizer</div> */}
    //   </div>
    //   <img
    //     src="/public/images/algo/recursion.png"
    //     alt="page of the algovizualizer project"
    //   />
    // </div>,
    // <div className="item" key="2">
    //   <div
    //     className="overlay"
    //     style={{
    //       background: "url('/public/images/algo/icon.png')",
    //       backgroundSize: 'cover',
    //     }}
    //   >
    //     {/* <div className="text">Algovizualizer</div> */}
    //   </div>
    //   <img
    //     src="/public/images/algo/sorting1.png"
    //     alt="page of the algovizualizer project"
    //   />
    // </div>,
    <div className="item" key="3">
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
    </div>,
    // <div className="item" key="4">
    //   <div
    //     className="overlay"
    //     style={{
    //       background: "url('/public/images/companies/icon2.png')",
    //       backgroundSize: 'cover',
    //     }}
    //   >
    //     {/* <div className="text">REST API</div> */}
    //   </div>
    //   <img
    //     src="/public/images/companies/companies1.png"
    //     alt="page of the companies api project"
    //   />
    // </div>,
    <div className="item" key="5">
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
    </div>,
    // <div className="item" key="6">
    //   <div
    //     className="overlay"
    //     style={{
    //       background: "url('/public/images/tetris/icon.png')",
    //       backgroundSize: 'cover',
    //     }}
    //   >
    //     {/* <div className="text">Tetris Game</div> */}
    //   </div>
    //   <img
    //     src="/public/images/tetris/tetris3b.png"
    //     alt="page of the falling blocks game"
    //   />
    // </div>,
    <div className="item" key="7">
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
    </div>,
    <div className="item" key="8">
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
    </div>,
    // <div className="item" key="9">
    //   <div
    //     className="overlay"
    //     style={{
    //       background: "url('/public/images/ashes/icon.webp')",
    //       backgroundSize: 'cover',
    //     }}
    //   >
    //     {/* <div className="text">App Deployment Guide</div> */}
    //   </div>
    //   <img
    //     src="/public/images/ashes/ashesashes.png"
    //     alt="logo of the ashes ashes project"
    //   />
    // </div>,
    <div className="item" key="10">
      <div
        className="overlay"
        style={{
          background: "url('/public/images/snake/icon.png')",
          backgroundSize: 'cover',
        }}
      >
        {/* <div className="text">App Deployment Guide</div> */}
      </div>
      <img src="/public/images/snake/snake1.png" alt="page of the snake game" />
    </div>,
  ];
  const shuffleElements = (elements) =>
    [...elements].sort(() => Math.random() - 0.5);
  const shuffledElements = shuffleElements(elements);

  return (
    <div className="grid">
      {shuffledElements.map((element, index) => element)}
    </div>
  );
};

export default ImageGrid;
