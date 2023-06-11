import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
//import Experience from './components/experience';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Skills from './components/skills';

function App() {
  return (
    <main>
      <NavBar />
      <About />
      <Projects />
      <Testimonials />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;



