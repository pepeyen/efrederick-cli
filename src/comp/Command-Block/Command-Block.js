import React, { Component } from 'react';
import Home from '../../pages/en_us/Home/Home';
import Help from '../../pages/en_us/Help/Help';
import About from '../../pages/en_us/About/About';
import Competences from '../../pages/en_us/Competences/Competences';
import Projects from '../../pages/en_us/Projects/Projects';
import ContactMe from '../../pages/en_us/ContactMe/ContactMe';
import Error from '../../pages/en_us/Error/Error';
import './Command-Block.scss';

class PageCommandBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput : '',
      pageOutput : <ContactMe />
    };
  }
  __handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.setPageOutput(event);
    }
  }
  __handleClick = () => {
    this.setPageOutput();
  }
  setPageOutput() {
    switch (this.state.userInput) {
      case '/home':
        this.setState({ pageOutput : <Home /> });
        break;
      case '/help':
        this.setState({ pageOutput : <Help /> });
        break;
      case '/about':
        this.setState({ pageOutput : <About /> });
        break;
      case '/competences':
        this.setState({ pageOutput : <Competences /> });
        break;
      case '/projects':
        this.setState({ pageOutput : <Projects  /> });
        break;
      case '/contact':
        this.setState({ pageOutput : <ContactMe /> });
        break;   
      case '/discord':
        this.setState({ pageOutput : <div>Pepeyen#3219</div> });
        break;       
      default:
        this.setState({ pageOutput : <Error issuedCommand = {this.state.userInput}/> });
        break;
    }
  }
  __handleChange = (event) => {
    this.setState({ userInput : event.target.value})
  }
  render() {
    return (
      <div className = "cli">    
        <div className = "cli__block">
          <div className = "cli__output">
            <p className = "cli__status">Compiled successfully!</p><br></br>
            <div className = "cli__output-text">
              {this.state.pageOutput}
            </div>
          </div>
          <div className = "cli__input">
            <div className = "cli__input-text-container">
              <label className = "cli__input-label" htmlFor="cli__input-text">eUser@eFrederick:~$</label>
              <input autoFocus className = "cli__input-text" name = "cli__input-text"  type="text" onChange={ this.__handleChange} onKeyDown={this.__handleKeyDown}/>
            </div>
            <input className = "cli__input-submit" onClick={this.__handleClick} type="button" value = "Submit"/>
          </div>
        </div>
      </div>
    );
  }
}

export default PageCommandBlock;