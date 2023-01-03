import React from 'react';
import Tetris from './Tetris';
import Algovisualizer from './Algovisualizer';

const Projects = () => {
  return (
    <article id="projects">
      <h2>Projects</h2>
      <p className="about">
        Recent projects include personal use, classroom demonstrations and aids,
        and more.
      </p>
      <div className="grid">
        <div className="item">
          <img
            src="/public/images/algo/arrays1.png"
            alt="page of the algovizualizer project"
          />
        </div>
        <div className="item">
          <img
            src="/public/images/algo/recursion.png"
            alt="page of the algovizualizer project"
          />
        </div>
        <div className="item">
          <img
            src="/public/images/algo/sorting1.png"
            alt="page of the algovizualizer project"
          />
        </div>
        <div className="item">
          <img
            src="/public/images/algo/sorting2.png"
            alt="page of the algovizualizer project"
          />
        </div>
        <div className="item">
          <img
            src="/public/images/companies/companies1.png"
            alt="page of the companies api project"
          />
        </div>
        <div className="item">
          <img
            src="/public/images/companies/companies2.png"
            alt="page of the companies api project"
          />
        </div>
        <div className="item">
          <img
            src="/public/images/tetris/tetris1b.PNG"
            alt="page of the falling blocks game"
          />
        </div>
        <div className="item">
          <img
            src="/public/images/tetris/tetris3b.png"
            alt="page of the falling blocks game"
          />
        </div>
        <div className="item">
          <img
            src="/public/images/tetris/tetris2b.png"
            alt="page of the falling blocks game"
          />
        </div>
      </div>
      <div className="contents"></div>
    </article>
  );
};

export default Projects;
