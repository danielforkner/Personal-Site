import React from 'react';
import javascriptSVG from '/public/images/tech-icons/javascript.svg';
import html5PNG from '/public/images/tech-icons/html5.png';
import css3PNG from '/public/images/tech-icons/css3.png';
import chartjsSVG from '/public/images/tech-icons/chartjs.svg';
import reduxPNG from '/public/images/tech-icons/redux.png';
import reactPNG from '/public/images/tech-icons/react.png';
import nodejsPNG from '/public/images/tech-icons/nodejs.png';
import expressSVG from '/public/images/tech-icons/express.svg';
import postgresSVG from '/public/images/tech-icons/postgresql.svg';
import renderPNG from '/public/images/tech-icons/render.png';
import bitioPNG from '/public/images/tech-icons/bitio.png';

const CardTechIcons = ({ project, icons }) => {
  return (
    <div className="tech-icons">
      {icons.map((icon, index) => {
        let src;
        switch (icon) {
          case 'javascript':
            src = javascriptSVG;
            break;
          case 'html5':
            src = html5PNG;
            break;
          case 'css3':
            src = css3PNG;
            break;
          case 'chartjs':
            src = chartjsSVG;
            break;
          case 'redux':
            src = reduxPNG;
            break;
          case 'react':
            src = reactPNG;
            break;
          case 'nodejs':
            src = nodejsPNG;
            break;
          case 'express':
            src = expressSVG;
            break;
          case 'postgres':
            src = postgresSVG;
            break;
          case 'render':
            src = renderPNG;
            break;
          case 'bitio':
            src = bitioPNG;
            break;
        }
        return (
          <img
            key={`techIcon-${project}:${index}`}
            className="tech-icon"
            src={src}
            alt="tech icon"
          />
        );
      })}
    </div>
  );
};

export default CardTechIcons;
