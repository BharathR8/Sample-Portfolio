import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';
import Skills from './components/skills';

function App() {
  return (
    <main>
      <NavBar />
      <About />
      <Certifications />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;



