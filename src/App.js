import React from 'react';
import Navbar from './comp/Navbar/Navbar';
import PageCommandBlock from './comp/Command-Block/Command-Block';
import Footer from './comp/Footer/Footer';
import './reset.css';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <PageCommandBlock />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;