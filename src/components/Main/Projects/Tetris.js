import React from 'react';
import CardHeader from '../Cards/CardHeader';
import CardImgGrid from '../Cards/CardImgGrid';
import CareText from '../Cards/CardText';
import TetrisVideos from './TetrisVideos';

const Tetris = () => {
  return (
    <div id="projects-tetris" className="card">
      <CardHeader
        data={{
          icon: '/public/images/tetris/icon.png',
          title: 'Tetris',
          deploy: 'https://danielforkner.github.io/tetris/',
          github: 'https://github.com/danielforkner/tetris',
        }}
      />

      <div className="card-body">
        <CareText
          description="A live instructional demo showing how to make a browser version of Tetris in JavaScript."
          overview="This project was built over 6 live classroom demos as a way to generate ideas and inspiration for students tasked with building their own game using JavaScript. The game itself features random piece generation, scoring and progressive difficulty, the ability to pause and restart the game, and settings."
          tech="JavaScript, HTML & CSS."
          techIcons={{
            project: 'tetris',
            icons: ['javascript.svg', 'html5.png', 'css3.png'],
          }}
        />
        <TetrisVideos />
        <CardImgGrid
          imgFolder="tetris"
          images={['tetris1b.png', 'tetris2b.png', 'tetris3b.png']}
        />
      </div>
    </div>
  );
};

export default Tetris;
