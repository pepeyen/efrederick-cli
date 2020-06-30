import React from 'react';
import  './Navbar.scss';

function Navbar() {
    return (
      <div className = "navbar">
          <div className = "navbar__link">
            <a className = "navbar__brand" href = "/#">eFrederick</a>
          </div>        
      </div>
    );
}

export default Navbar;