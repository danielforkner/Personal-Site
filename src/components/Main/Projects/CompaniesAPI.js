import React from 'react';

const CompaniesAPI = () => {
  return (
    <div id="projects-companiesapi" className="card">
      <div className="card-header">
        <div className="card-header-text">
          <img
            className="icon"
            src="/public/images/companies/icon2.png"
            alt="icon"
          />
          <div>Project: CompaniesAPI</div>
        </div>
        <ul className="card-header-links">
          <li className="card-header-link">
            <a href="#">Deploy</a>
          </li>
          <li className="card-header-link">
            <a href="#">GitHub</a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <p>
          <span className="paragraph-title">What: </span>A RESTful API that
          manages requests related to a database of companies, their employees,
          and their financial reports.
        </p>
        <p>
          <span className="paragraph-title">Overview: </span>This project came
          out of the need for a teaching tool for students learning about REST
          APIs for the first time.
        </p>
        <p>
          <span className="paragraph-title">Tech: </span>The API was built using
          Node.js, Express, and PostgreSQL. The API is hosted on Render and the
          database is hosted on bit.io. The front end was built in vanilla
          JavaScript and HTML/CSS.
        </p>
        <div className="tech-icons">
          <img
            className="tech-icon"
            src="/public/images/tech-icons/javascript.svg"
            alt="javascript icon"
          />
          <img
            className="tech-icon"
            src="/public/images/tech-icons/nodejs.svg"
            alt="nodejs icon"
          />
          <img
            className="tech-icon"
            src="/public/images/tech-icons/express.svg"
            alt="express icon"
          />
          <img
            className="tech-icon"
            src="/public/images/tech-icons/postgresql.svg"
            alt="postgresql icon"
          />
          <img
            className="tech-icon"
            src="/public/images/tech-icons/render.png"
            alt="render icon"
          />
          <img
            className="tech-icon"
            src="/public/images/tech-icons/bitio.png"
            alt="bit.io icon"
          />
        </div>
        <div className="grid">
          <div className="item">
            <div
              className="overlay"
              style={{
                background: "url('/public/images/companies/icon2.png')",
                backgroundSize: 'cover',
              }}
            ></div>
            <img
              src="/public/images/companies/companies1.png"
              alt="page of the companies api project"
            />
          </div>
          <div className="item">
            <div
              className="overlay"
              style={{
                background: "url('/public/images/companies/icon1.png')",
                backgroundSize: 'cover',
              }}
            ></div>
            <img
              src="/public/images/companies/companies2.png"
              alt="page of the companies api project"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesAPI;
