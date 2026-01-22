import React from 'react';
import Tetris from './Tetris';
import Algovisualizer from './Algovisualizer';
import CompaniesAPI from './CompaniesAPI';
import Deployment from './Deployment';
import Snake from './Snake';
import Train from './Train';
import Finance from './Finance';

const Projects = () => {
  return (
    <article id="projects">
      <h2>Projects</h2>

      <div className="contents">
        <Train />
        <Finance />
        {/* <CompaniesAPI /> */}
        <Algovisualizer />
        <Tetris />
        <Snake />
        {/* <Deployment /> */}
      </div>
    </article>
  );
};

export default Projects;
