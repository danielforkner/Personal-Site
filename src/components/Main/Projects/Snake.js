import React from 'react';
import CardHeader from '../Cards/CardHeader';
import CardImgGrid from '../Cards/CardImgGrid';
import CardText from '../Cards/CardText';
import icon from '/public/images/snake/icon.png';
import snake1 from '/public/images/snake/snake1.png';
import snake2 from '/public/images/snake/snake2.png';
import snake3 from '/public/images/snake/snake3.png';

const Snake = () => {
  return (
    <div id="projects-snake" className="card">
      <CardHeader
        data={{
          icon: icon,
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
            icons: ['javascript', 'html5', 'css3'],
          }}
        />
        <CardImgGrid overlays={[icon]} images={[snake1, snake2, snake3]} />
      </div>
    </div>
  );
};

export default Snake;
