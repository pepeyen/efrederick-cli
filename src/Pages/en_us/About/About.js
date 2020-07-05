import React, { Component } from 'react';
import '../../css/about.scss';
import '../../css/index.scss';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <p className = "cli__info">Running: <strong className = "cli__source"> About.sh </strong></p><br></br>
        <div className = "cli__output-text">
          <p className = "cli__message-system --msg-1"><strong className = "cli__message-sender">{'<SYSTEM>'}</strong> CHAT INTIALIZED WITH <strong className = "cli__message-sender-reference">eFrederick</strong></p><br></br>
          <p className = "cli__message --msg-2"><strong className = "cli__message-sender">{'<eFrederick>'}</strong> Hi i'm<strong className = "cli__message-crucial"> Erick Frederick</strong> also known as <strong className = "cli__message-crucial">eFrederick</strong>, nice to meet you!</p><br></br>
          <p className = "cli__message --msg-3"><strong className = "cli__message-sender">{'<eFrederick>'}</strong> well</p><br></br>
          <p className = "cli__message --msg-4"><strong className = "cli__message-sender">{'<eFrederick>'}</strong> i mean</p><br></br>
          <p className = "cli__message --msg-5"><strong className = "cli__message-sender">{'<eFrederick>'}</strong> chat...</p><br></br>
          <p className = "cli__message --msg-6"><strong className = "cli__message-sender">{'<eFrederick>'}</strong> Sorry.</p><br></br>
          <p className = "cli__message --msg-7"><strong className = "cli__message-sender">{'<eFrederick>'}</strong> Since the first time i got in touch with being a developer overall at 2018, it was love at first sight.</p><br></br>
          <p className = "cli__message --msg-8"><strong className = "cli__message-sender">{'<eFrederick>'}</strong> I'm quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time.</p><br></br>
          <p className = "cli__message --msg-9"><strong className = "cli__message-sender">{'<eFrederick>'}</strong> Now with that out of the way, issue any given <strong className = "cli__message-command">command</strong> of the options, if you still don't remember them you can issue <strong className = "cli__message-command">/help</strong> any time during the runtime of the CLI.</p><br></br>
          <p className = "cli__message --msg-10"><strong className = "cli__message-sender">{'<eFrederick>'}</strong> got to go</p><br></br>
          <p className = "cli__message --msg-11"><strong className = "cli__message-sender">{'<eFrederick>'}</strong> but again, i was nice to chat with you (* ^ ω ^)</p><br></br>
          <p className = "cli__message-system --msg-12"><strong className = "cli__message-sender">{'<SYSTEM>'}</strong> USER <strong className = "cli__message-sender-reference">eFrederick</strong> IS NOW OFFLINE</p><br></br>
          <p className = "cli__message-system --msg-13"><strong className = "cli__message-sender">{'<SYSTEM>'}</strong> ISSUE <strong className = "cli__message-command">/help</strong> AT THE INPUT-BOX AT THE BOTTOM IF YOU DON'T REMEMBER THE COMMANDS</p><br></br>
          <p className = "cli__message-system --msg-14"><strong className = "cli__message-sender">{'<SYSTEM>'}</strong> SESSION TERMINATED</p><br></br>
        </div>
      </React.Fragment>
    );
  }
}

export default About;