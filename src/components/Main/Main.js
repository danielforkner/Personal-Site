import React from 'react';
import ContactForm from './ContactForm';
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
        {/* <Resume /> */}
        <ContactForm />
      </div>
    </main>
  );
};

export default Main;
