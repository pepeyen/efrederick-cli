import React from 'react';
import Navbar from './comp/Navbar/Navbar';
import PageCommandBlock from './comp/Page-Command-Block/Page-Command-Block';
import './reset.css';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <PageCommandBlock/>
      </main>
      <footer>

      </footer>
    </React.Fragment>
  );
}

export default App;