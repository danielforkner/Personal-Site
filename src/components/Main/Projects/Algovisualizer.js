import React from 'react';
import CardHeader from '../Cards/CardHeader';
import CardImgGrid from '../Cards/CardImgGrid';
import CardText from '../Cards/CardText';

const Algovisualizer = () => {
  return (
    <div id="projects-algovisualizer" className="card">
      <CardHeader
        data={{
          icon: '/public/images/algo/icon.png',
          title: 'Algovisualizer',
          deploy: 'https://algovisualized.netlify.app/',
          github: 'https://github.com/danielforkner/algovisualizer',
        }}
      />
      <div className="card-body">
        <CardText
          description="A RESTful API that manages requests related to a database of companies, their employees, and their financial reports."
          overview="This project came out of the need for a teaching tool for students learning about REST APIs for the first time."
          tech="React and Redux for the front end. Chart.js for the data visualization."
          techIcons={{
            project: 'algovisuzlizer',
            icons: ['react.png', 'redux.png', 'chartjs.svg', 'javascript.svg'],
          }}
        />

        <CardImgGrid
          imgFolder="algo"
          images={['arrays1.png', 'recursion.png', 'sorting2.png']}
        />
      </div>
    </div>
  );
};

export default Algovisualizer;
