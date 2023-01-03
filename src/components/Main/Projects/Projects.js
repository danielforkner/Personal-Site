import React from 'react';

const Projects = () => {
  return (
    <article id="projects">
      <h2>Projects</h2>
      <p className="about">
        Recent projects include personal use, classroom demonstrations and aids,
        and more.
      </p>
      <div className="contents" style={{ width: '50%' }}>
        <img
          src="../../../../public/images/fallingBlocks.png"
          alt="Falling Blocks"
          style={{ width: '100%' }}
        />
      </div>
    </article>
  );
};

export default Projects;
