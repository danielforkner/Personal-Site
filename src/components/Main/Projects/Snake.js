import React from 'react';
import CardHeader from '../Cards/CardHeader';
import CardImgGrid from '../Cards/CardImgGrid';
import CardText from '../Cards/CardText';

const Snake = () => {
  return (
    <div id="projects-snake" className="card">
      <CardHeader
        data={{
          icon: '/public/images/snake/icon.png',
          title: 'Snake',
          deploy: 'https://danielforkner.github.io/snake-the-game/',
          github: 'https://github.com/danielforkner/snake-the-game',
        }}
      />
      <div className="card-body">
        <CardText
          description="A unique twist on the game Snake. Built in JavaScript for the browser."
          overview="This project was developed as part of a one week challenge to design snake in JavaScript. In this game, the player is attempting to defeat enemies. The amount of damage the snake attacks with depends on the size of it's body. The game features:"
          tech="JavaScript, HTML & CSS."
          features={[
            '3 distinct levels with progressive dialogue',
            '3 unique bosses each with their own skills',
            'Powerups and spells that impact game difficulty',
            'Custom animations and effects',
          ]}
          techIcons={{
            project: 'snake',
            icons: ['javascript.svg', 'html5.png', 'css3.png'],
          }}
        />
        <CardImgGrid
          imgFolder="snake"
          images={['snake1.png', 'snake2.png', 'snake3.png']}
        />
      </div>
    </div>
  );
};

export default Snake;
