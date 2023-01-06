import React from 'react';
import CardHeader from '../Cards/CardHeader';
import CardImgGrid from '../Cards/CardImgGrid';
import CardText from '../Cards/CardText';

const CompaniesAPI = () => {
  return (
    <div id="projects-companiesapi" className="card">
      <CardHeader
        data={{
          icon: '/public/images/companies/icon2.png',
          title: 'CompaniesAPI',
          deploy: 'https://companies-api.onrender.com/',
          github: 'https://github.com/danielforkner/companies_api',
        }}
      />
      <div className="card-body">
        <CardText
          description="A RESTful API that manages requests related to a database of companies, their employees, and their financial reports."
          overview="This project came out of the need for a teaching tool for students learning about REST APIs for the first time. The dynamic REST API documentation provides a quick reference for the endpoints and their parameters. Students also utilize the API to build a front end application that displays the data in a meaningful way."
          tech="The API was built using Node.js, Express, and PostgreSQL. The API is hosted on Render and the database is hosted on bit.io. The front is built in JavaScript, and HTML & CSS."
          techIcons={{
            project: 'companiesapi',
            icons: [
              'javascript.svg',
              'nodejs.png',
              'express.svg',
              'postgresql.svg',
              'render.png',
              'bitio.png',
            ],
          }}
        />
        <CardImgGrid
          imgFolder="companies"
          images={['companies1.png', 'companies2.png', 'companies3.png']}
          icons={['icon1.png', 'icon2.png', 'icon3.png']}
        />
      </div>
    </div>
  );
};

export default CompaniesAPI;
