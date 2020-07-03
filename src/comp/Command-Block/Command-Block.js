import React, { Component } from 'react';
import Home from '../../Pages/en_us/Home/Home';
import Help from '../../Pages/en_us/Help/Help';
import About from '../../Pages/en_us/About/About';
import Competences from '../../Pages/en_us/Competences/Competences';
import Projects from '../../Pages/en_us/Projects/Projects';
import ContactMe from '../../Pages/en_us/ContactMe/ContactMe';
import Error from '../../Pages/en_us/Error/Error';
import './Command-Block.scss';

class PageCommandBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commandInput : '',
      commandOutput : <Competences />
    };
  }
  cliNav(event){
    switch (this.state.commandInput) {
      case '/home':
        this.setState({ commandOutput : <Home /> });
        break;
      case '/help':
        this.setState({ commandOutput : <Help /> });
        break;
      case '/about':
        this.setState({ commandOutput : <About /> });
        break;
      case '/competences':
        this.setState({ commandOutput : <Competences /> });
        break;
      case '/projects':
        this.setState({ commandOutput : <Projects  /> });
        break;
      case '/contact':
        this.setState({ commandOutput : <ContactMe /> });
        break;   
      case '/discord':
        this.setState({ commandOutput : <div>Pepeyen#3219</div> });
        break;       
      default:
        this.setState({ commandOutput : <Error issuedCommand = {this.state.commandInput}/> });
        break;
    }
  }
  __handleOnChange = (event) =>{
    this.setState({ commandInput : event.target.value})
  }
  _handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.cliNav(event);
    }
  }
  __handleClickButton = (event) =>{
    this.cliNav(event);
  }
  render() {
    return (
      <div className = "cli">    
        <div className = "cli__block">
          <div className = "cli__output">
            <p className = "cli__status">Compiled successfully!</p><br></br>
            <div className = "cli__output-text">
              {this.state.commandOutput}
            </div>
          </div>
          <div className = "cli__input">
            <label className = "cli__input-label" htmlFor="cli__input-text">eUser@eFrederick:~$  </label>
            <input autoFocus className = "cli__input-text" name = "cli__input-text"  type="text" onChange={ this.__handleOnChange} onKeyDown={this._handleKeyDown}/>
            <input className = "cli__input-submit" onClick={this.__handleClickButton} type="button" value = "Submit"/>
          </div>
        </div>
      </div>
    );
  }
}

export default PageCommandBlock;