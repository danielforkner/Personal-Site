import React from 'react';
import Contact from './Contact';
import Projects from './Projects/Projects';
import Resume from './Resume';
import Aside from './Aside';
import About from './About';

const Main = () => {
  return (
    <main>
      <Aside />
      <div className="content">
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </main>
  );
};

export default Main;
