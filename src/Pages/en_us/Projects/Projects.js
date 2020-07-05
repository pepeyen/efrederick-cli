import React from 'react';
import '../../css/index.scss';
import '../../css/projects.scss';
function Projects() {
    return (
      <React.Fragment> 
        <p className = "cli__info">Running: <strong className = "cli__source"> Projects.sh</strong></p><br></br>
        <div className = "cli__output-text">
              <div className = "cli__project">
                pyramid-3d <a className = "cli__link" href = "https://github.com/pepeyen/pyramid-3d" target = "_blank" rel="noopener noreferrer" >&lt;repo&gt;</a> <span className = "deactivated">&lt;demo&gt;</span>
              </div>
              <div className = "cli__project">
                oop-tech <a className = "cli__link" href = "https://github.com/pepeyen/oop-tech" target = "_blank" rel="noopener noreferrer">&lt;repo&gt;</a> <span className = "deactivated">&lt;demo&gt;</span>
              </div>
              <div className = "cli__project">
                cs-tech <a className = "cli__link" href = "https://github.com/pepeyen/cs-tech" target = "_blank" rel="noopener noreferrer">&lt;repo&gt;</a> <a className = "cli__link" href = "https://pepeyen.github.io/cs-tech/#/" target = "_blank" rel="noopener noreferrer">&lt;demo&gt;</a>
              </div>
              <div className = "cli__project">
                portfolio <a className = "cli__link" href = "https://github.com/pepeyen/portfolio" target = "_blank" rel="noopener noreferrer">&lt;repo&gt;</a> <a className = "cli__link" href = "/">&lt;demo&gt;</a>
              </div>
        </div>
      </React.Fragment>
    );
}

export default Projects;