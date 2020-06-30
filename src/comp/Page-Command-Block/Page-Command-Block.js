import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';
import Competences from './Competences/Competences';
import Projects from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';
import './Page-Command-Block.scss';

class PageCommandBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commandOutput : <Home />
    };
  }
  _handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      switch (event.target.value) {
        case '/home':
          this.setState({ commandOutput : <Home /> });
          break;
        case '/about':
          this.setState({ commandOutput : <About /> });
          break;
        case '/competences':
          this.setState({ commandOutput : <Competences /> });
          break;
        case '/projects':
          this.setState({ commandOutput : <Projects /> });
          break;
        case '/contact':
          this.setState({ commandOutput : <ContactMe /> });
          break;          
        default:
          break;
      }
    }
  }
  render() {
    return (
      <div className = "page-command">    
        <div className = "page-command__block">
          <div className = "page-command__output">
            <h1>Compiled successfully!</h1><br></br>
            <h2>Running: <strong> Page-Command-Block.js </strong></h2><br></br>
            <h3>Issue a <em>command</em> any of the given options <em>below</em></h3>
            <div className = "page-command__output-text">
              {this.state.commandOutput}
            </div>
          </div>
          <div className = "page-command__input">
            <label className = "page-command__input-label" htmlFor="input-text">eUser@eFrederick:~$  </label>
            <input autoFocus className = "page-command__input-text" name = "input-text"  type="text" onKeyDown={this._handleKeyDown}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PageCommandBlock;