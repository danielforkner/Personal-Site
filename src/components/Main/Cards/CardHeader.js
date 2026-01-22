import React from 'react';

const CardHeader = ({ data }) => {
  const { icon, title, deploy, github } = data;
  return (
    <div className="card-header">
      <div className="card-header-text">
        <img className="icon" src={icon} alt="icon" />
        <div>{title}</div>
      </div>
      <ul className="card-header-links">
        <li className="card-header-link">
          <a href={deploy} target="_blank">
            Visit
          </a>
        </li>
        {github && (
          <li className="card-header-link">
            <a href={github} target="_blank">
              GitHub
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CardHeader;
