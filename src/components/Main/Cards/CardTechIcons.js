import React, { useState } from 'react';
import javascript from '/public/images/tech-icons/javascript.svg';
import html5 from '/public/images/tech-icons/html5.png';
import css3 from '/public/images/tech-icons/css3.png';
import chartjs from '/public/images/tech-icons/chartjs.svg';
import redux from '/public/images/tech-icons/redux.png';
import react from '/public/images/tech-icons/react.png';
import nodejs from '/public/images/tech-icons/nodejs.png';
import express from '/public/images/tech-icons/express.png';
import postgres from '/public/images/tech-icons/postgresql.png';
import render from '/public/images/tech-icons/render.png';
import bitio from '/public/images/tech-icons/bitio.png';
import jwt from '/public/images/tech-icons/jwt.png';
import jest from '/public/images/tech-icons/jest.png';

const CardTechIcons = ({ project, icons }) => {
  // look into https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/
  const [hover, setHover] = useState(false);
  const [hoverMessage, setHoverMessage] = useState('');
  return (
    <div className="tech-icons">
      {hover && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            border: '1px solid black',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '0 5px',
          }}
        >
          {hoverMessage}
        </div>
      )}
      {icons.map((icon, index) => {
        let src;
        let text;
        switch (icon) {
          case 'javascript':
            src = javascript;
            text = 'JavaScript';
            break;
          case 'html5':
            src = html5;
            text = 'HTML5';
            break;
          case 'css3':
            src = css3;
            text = 'CSS3';
            break;
          case 'chartjs':
            src = chartjs;
            text = 'Chart.js';
            break;
          case 'redux':
            src = redux;
            text = 'Redux';
            break;
          case 'react':
            src = react;
            text = 'React';
            break;
          case 'nodejs':
            src = nodejs;
            text = 'Node.js';
            break;
          case 'express':
            src = express;
            text = 'Express';
            break;
          case 'postgres':
            src = postgres;
            text = 'PostgreSQL';
            break;
          case 'render':
            src = render;
            text = 'Render';
            break;
          case 'bitio':
            src = bitio;
            text = 'bit.io';
            break;
          case 'jwt':
            src = jwt;
            text = 'JSON Web Token';
            break;
          case 'jest':
            src = jest;
            text = 'Jest';
            break;
        }
        return (
          <img
            key={`techIcon-${project}:${index}`}
            className="tech-icon"
            src={src}
            alt="tech icon"
            onMouseEnter={() => {
              setHover(true);
              setHoverMessage(text);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          />
        );
      })}
    </div>
  );
};

export default CardTechIcons;
