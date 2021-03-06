import React from 'react'; 
import '../../css/competencies.scss';
function Competencies() {
    return (
      <React.Fragment> 
        <p className = "cli__info">Running: <strong className = "cli__source">Competencies.sh </strong></p><br></br>
          <div className = "cli__output-text">
            <div className = "cli__root-name">
              Competencies
            </div>
            <div className = "cli__root-lead">
              <div className = "cli__dir-structure">
                <div className = "cli__dir">
                  Languages
                  <div className = "cli__dir-lead">
                    <div className = "cli__subdir">
                      Front End
                      <div className = "cli__subdir-lead">
                        <div className = "cli__dir-content">
                          .html5
                        </div>
                        <div className = "cli__dir-content">
                          .css3
                        </div>
                        <div className = "cli__dir-content">
                          .javascript
                        </div>
                        <div className = "cli__dir-content">
                          .reactJS
                        </div>
                      </div>
                    </div>
                    <div className = "cli__dir-content">
                      .C
                    </div>
                    <div className = "cli__dir-content">
                      .C#
                    </div>
                    <div className = "cli__dir-content">
                      .java
                    </div>
                    <div className = "cli__dir-content">
                      .php
                    </div>
                  </div>  
                </div>
              </div>
              <div className = "cli__dir-structure">
                <div className = "cli__dir">
                  Tools
                  <div className = "cli__dir-lead">
                    <div className = "cli__dir-content">
                        .Github
                    </div>
                    <div className = "cli__dir-content">
                        .Git
                    </div>
                    <div className = "cli__dir-content">
                        .Photoshop
                    </div>
                    <div className = "cli__dir-content">
                        .Figma
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
}

export default Competencies;