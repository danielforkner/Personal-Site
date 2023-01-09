import React from 'react';
import CardHeader from '../Cards/CardHeader';
import CardImgGrid from '../Cards/CardImgGrid';
import CardText from '../Cards/CardText';
import icon1 from '/public/images/companies/icon1.png';
import icon2 from '/public/images/companies/icon2.png';
import icon3 from '/public/images/companies/icon3.png';
import companies1 from '/public/images/companies/companies1.png';
import companies2 from '/public/images/companies/companies2.png';
import companies3 from '/public/images/companies/companies3.png';

const CompaniesAPI = () => {
  return (
    <div id="projects-companiesapi" className="card">
      <CardHeader
        data={{
          icon: icon1,
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
              'javascript',
              'nodejs',
              'express',
              'postgres',
              'render',
              'bitio',
            ],
          }}
        />
        <CardImgGrid
          overlays={[icon1, icon2, icon3]}
          images={[companies1, companies2, companies3]}
        />
      </div>
    </div>
  );
};

export default CompaniesAPI;
