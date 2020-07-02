import React, { Component } from 'react';
import '../../index.scss';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output : ''
    };
  }
  componentDidMount() {
    let en_us = [
      " Hi i'm", 
      " Erick Frederick", 
      ", nice to meet you, well i mean chat.",
      " Since the first time i got in touch with being a developer overall at 2018, it was love at first sight",
      " I'm quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time.",
      " Now with that out of the way, issue any given ",
      "command",
      " of the options ",
      "below."
    ]
    let pt_br = [
      " Olá eu sou", 
      " Erick Frederick", 
      ", que bom conhecer você, bom, ter um chat.",
      " Desde que tive contato em ser um desenvolvedor como um todo, em meados de 2018, foi amor a primeira vista",
      " Sou quietamente confidente, naturalmente curioso, e continuo trabalhando em melhorar minhas skills um problema por vez.",
      " Agora com isso fora da lista, execute qualquer ",
      "comando",
      " das opções ",
      "abaixo."
    ]
    this.setState({ output : en_us });
  }
  render(){
    return (
      <div className = "about-output">    
        <p><b>{'<eFrederick>'}</b>{this.state.output[0]}<em>{this.state.output[1]}</em>{this.state.output[2]}.</p><br></br>
        <p><b>{'<eFrederick>'}</b>{this.state.output[3]}</p><br></br>
        <p><b>{'<eFrederick>'}</b>{this.state.output[4]}</p><br></br>
        <p><b>{'<eFrederick>'}</b>{this.state.output[5]}<em>{this.state.output[6]}</em>{this.state.output[7]}<em>{this.state.output[8]}</em></p><br></br>
      </div>
    );
  }
}

export default About;