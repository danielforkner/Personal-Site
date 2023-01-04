import React from 'react';
import Tetris from './Tetris';
import Algovisualizer from './Algovisualizer';
import ImageGrid from './ImageGrid';
import CompaniesAPI from './CompaniesAPI';
import Deployment from './Deployment';
import Snake from './Snake';

const Projects = () => {
  return (
    <article id="projects">
      <h2>Projects</h2>
      <p className="about">
        Recent projects include personal use, classroom demonstrations and aids,
        and more.
      </p>
      <p>
        I love to learn new technologies and utilize projects to solve problems.
      </p>
      <p>
        Currently I am learning .NET by utilizing a Rasperry Pi as a home
        server.
      </p>
      <ImageGrid />
      <div className="contents">
        {/* <CompaniesAPI /> */}
        {/* <Algovisualizer /> */}
        {/* <Deployment /> */}
        <Tetris />
        {/* <Snake /> */}
      </div>
    </article>
  );
};

export default Projects;
