import React from 'react';
import CardTechIcons from './CardTechIcons';

const CardText = ({ description, overview, tech, techIcons, features }) => {
  return (
    <>
      <div className="card-body-section">
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div className="card-body-section">
        <h3>Overview</h3>
        <p>{overview}</p>
        {features && (
          <ul className="features-list">
            {features.map((feature, i) => (
              <li key={`${feature.slice(5)}:${i}`}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="card-body-section">
        <h3>Tech</h3>
        <p>{tech}</p>
        {techIcons && (
          <CardTechIcons project={techIcons.project} icons={techIcons.icons} />
        )}
      </div>
    </>
  );
};

export default CardText;
