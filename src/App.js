import React from 'react';
import Navbar from './comp/Navbar/Navbar';
import About from './comp/About/About';
import Competences from './comp/Competences/Competences';
import Projects from './comp/Projects/Projects';
import ContactMe from './comp/ContactMe/ContactMe';
import Footer from './comp/Footer/Footer';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <Competences />
        <Projects />
        <ContactMe />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;