import React from 'react';
import CardHeader from '../Cards/CardHeader';
import CardImgGrid from '../Cards/CardImgGrid';
import CardText from '../Cards/CardText';
import icon from '/public/images/train/icon.jpg';
import screenshot1 from '/public/images/train/Screenshot 2026-01-21 190802.jpg';
import screenshot2 from '/public/images/train/Screenshot 2026-01-21 190936.jpg';
import screenshot3 from '/public/images/train/Screenshot 2026-01-21 191000.jpg';

const Train = () => {
  return (
    <div id="projects-train" className="card">
      <CardHeader
        data={{
          icon: icon,
          title: 'Workout Tracker - 2026',
          deploy: 'https://train.danielforkner.com',
        }}
      />
      <div className="card-body">
        <CardText
          description="A workout tracking application with AI-powered Discord integration for celebrating personal records."
          overview="Built for lifters who want simple, effective workout logging without the bloat. Track your sets, monitor volume over time, and automatically calculate estimated 1RM for every lift."
          tech="React frontend with Node.js and Express backend. MySQL database containerized with Docker."
          features={[
            'Dead simple logging - reps, weight, done',
            'Days since last session per exercise',
            'Volume tracking with visual charts',
            'Automatic 1RM calculations and PR tracking',
            'AI-powered Discord bot celebrates your milestones',
          ]}
          techIcons={{
            project: 'train',
            icons: ['react', 'nodejs', 'express', 'docker', 'mysql'],
          }}
        />

        <CardImgGrid
          overlays={[icon]}
          images={[screenshot1, screenshot2, screenshot3]}
        />
      </div>
    </div>
  );
};

export default Train;
