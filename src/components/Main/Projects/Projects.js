import React from 'react';
import Tetris from './Tetris';
import Algovisualizer from './Algovisualizer';
import ImageGrid from './ImageGrid';

const Projects = () => {
  return (
    <article id="projects">
      <h2>Projects</h2>
      <p className="about">
        Recent projects include personal use, classroom demonstrations and aids,
        and more.
      </p>
      <ImageGrid />
      <div className="contents">
        <Tetris />
      </div>
    </article>
  );
};

export default Projects;
