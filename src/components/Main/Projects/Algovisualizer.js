import React from 'react';
import CardHeader from '../Cards/CardHeader';
import CardImgGrid from '../Cards/CardImgGrid';
import CardText from '../Cards/CardText';
import icon from '/public/images/algo/icon.png';
import arrays1 from '/public/images/algo/arrays1.png';
import recursion from '/public/images/algo/recursion.png';
import sorting2 from '/public/images/algo/sorting2.png';

const Algovisualizer = () => {
  return (
    <div id="projects-algovisualizer" className="card">
      <CardHeader
        data={{
          icon: icon,
          title: 'Algovisualizer - 2022',
          deploy: 'https://algovisualized.netlify.app/',
          github: 'https://github.com/danielforkner/algovisualizer',
        }}
      />
      <div className="card-body">
        <CardText
          description="A dynamic web application that visualizes common sorting and searching algorithms."
          overview="This project was created as a teaching tool for students learning basic algorithms and data structures. Visualization is offered for:"
          tech="React and Redux for the front end. Chart.js for the data visualization."
          features={[
            'Insertion Sort',
            'Merge Sort',
            'Quick Sort',
            'Bubble Sort',
            'Selection Sort',
            'Arrays: Two Sum Search (brute force and efficient)',
            'Arrays: Three Sum Search (brute force and efficient)',
            'Recursion',
          ]}
          techIcons={{
            project: 'algovisuzlizer',
            icons: ['react', 'redux', 'chartjs', 'javascript'],
          }}
        />

        <CardImgGrid
          overlays={[icon]}
          images={[arrays1, recursion, sorting2]}
        />
      </div>
    </div>
  );
};

export default Algovisualizer;
