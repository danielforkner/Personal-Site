import React from 'react';

const CardTechIcons = ({ project, icons }) => {
  return (
    <div className="tech-icons">
      {icons.map((icon, index) => {
        return (
          <img
            key={`techIcon-${project}:${index}`}
            className="tech-icon"
            src={`/public/images/tech-icons/${icon}`}
            alt="tech icon"
          />
        );
      })}
    </div>
  );
};

export default CardTechIcons;
