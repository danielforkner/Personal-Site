import React, { useState, useRef, useEffect } from 'react';
import {
  javascript,
  html5,
  css3,
  chartjs,
  redux,
  react,
  nodejs,
  express,
  postgres,
  render,
  bitio,
  jwt,
  jest,
  docker,
  mysql,
  nextjs,
  drizzle,
  betterauth,
  mcp,
} from './images';

const CardTechIcons = ({ project, icons }) => {
  const [hoverMessage, setHoverMessage] = useState('');
  const textPosition = useRef({ x: 0, y: 0 });
  const hover = useRef(false);

  return (
    <div className="tech-icons" style={{ position: 'relative' }}>
      {hover.current && (
        <div
          className="tech-icon-hover"
          style={{
            position: 'absolute',
            top: textPosition.current.y,
            left: textPosition.current.x,
            border: '1px solid black',
            padding: '0 5px',
            className: 'tech-icon-hover',
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
          case 'docker':
            src = docker;
            text = 'Docker';
            break;
          case 'mysql':
            src = mysql;
            text = 'MySQL';
            break;
          case 'nextjs':
            src = nextjs;
            text = 'Next.js';
            break;
          case 'drizzle':
            src = drizzle;
            text = 'Drizzle ORM';
            break;
          case 'betterauth':
            src = betterauth;
            text = 'Better Auth';
            break;
          case 'mcp':
            src = mcp;
            text = 'Model Context Protocol';
            break;
        }
        return (
          <img
            key={`techIcon-${project}:${index}`}
            className="tech-icon"
            src={src}
            alt="tech icon"
            onMouseOver={(ev) => {
              textPosition.current.x = `${ev.target.offsetLeft + 50}px`;
              textPosition.current.y = `${ev.target.offsetTop + 50}px`;
              hover.current = true;
              setHoverMessage(text);
            }}
            onMouseOut={() => {
              hover.current = false;
              setHoverMessage('');
            }}
          />
        );
      })}
    </div>
  );
};

export default CardTechIcons;
