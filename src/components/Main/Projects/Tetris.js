import React from 'react';
import CardHeader from '../Cards/CardHeader';
import CardImgGrid from '../Cards/CardImgGrid';
import CareText from '../Cards/CardText';
import TetrisVideos from './TetrisVideos';
import icon from '/public/images/tetris/icon.png';
import tetris1PNG from '/public/images/tetris/tetris1b.png';
import tetris2PNG from '/public/images/tetris/tetris2b.png';
import tetris3PNG from '/public/images/tetris/tetris3b.png';

const Tetris = () => {
  return (
    <div id="projects-tetris" className="card">
      <CardHeader
        data={{
          icon: icon,
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
            icons: ['javascript', 'html5', 'css3'],
          }}
        />
        <TetrisVideos />
        <CardImgGrid
          overlays={[icon]}
          images={[tetris1PNG, tetris2PNG, tetris3PNG]}
        />
      </div>
    </div>
  );
};

export default Tetris;
