import React from 'react';
import Tetris from './Tetris';
import Algovisualizer from './Algovisualizer';
import CompaniesAPI from './CompaniesAPI';
import Deployment from './Deployment';
import Snake from './Snake';

const Projects = () => {
  return (
    <article id="projects">
      <h2>Projects</h2>

      <div className="contents">
        <CompaniesAPI />
        <Algovisualizer />
        <Deployment />
        <Tetris />
        <Snake />
      </div>
    </article>
  );
};

export default Projects;
