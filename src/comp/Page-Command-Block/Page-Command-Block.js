import React from 'react';
import './Page-Command-Block.scss';
function PageCommandBlock() {
  return (
    <div className = "page-command">    
      <div className = "page-command__block">
        <div className = "page-command__output">
          <h1>Compiled successfully!</h1><br></br>
          <h2>Running: <strong> Page-Command-Block.js </strong></h2><br></br>
          <h3>Issue a <em>command</em> contaning any of the given options <em>below</em></h3>
          <div className = "page-command__output-text">
            <p>about <strong>-- learn about more who is eFrederick</strong></p><br></br>
            <p>competences <strong>-- learn who eFrederick is really made of</strong></p><br></br>
            <p>projects <strong>-- learn what eFrederick has been doing</strong></p><br></br>
            <p>contact <strong>-- get in touch with eFrederick</strong></p><br></br>
          </div>
        </div>
        <div className = "page-command__input">
          <label className = "page-command__input-label" for="input-text">eUser@eFrederick:  </label>
          <input autoFocus className = "page-command__input-text" name = "input-text"  type="text"/>
        </div>
      </div>
    </div>

  );
}

export default PageCommandBlock;