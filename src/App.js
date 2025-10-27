import React from 'react';
import './App.css';
import './i18n';
import Navigation from './components/Nav_bar/Navigation.js';
import Introduction from './components/Introduction/Introduction.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Introduction />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
