import React from 'react';
import  './Navbar.scss';

function Navbar() {
    return (
      <div className = "navbar">
          <div className = "navbar__section">
            <a className = "navbar__about" href = "/#">.about</a>
          </div>
          <div className = "navbar__section">
            <a className = "navbar__competences" href = "/#">.competences</a>
          </div>
          <div className = "navbar__section --center">
            <a className = "navbar__brand" href = "/#">eFrederick</a>
          </div>
          <div className = "navbar__section">
            <a className = "navbar__projects" href = "/#">.projects</a>  
          </div>
          <div className = "navbar__section">
            <a className = "navbar__contact" href = "/#">.contacts</a>
          </div>             
      </div>
    );
}

export default Navbar;