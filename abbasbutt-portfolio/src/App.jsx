import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;