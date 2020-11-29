import React from 'react';
import '../../css/index.scss';
import '../../css/projects.scss';

function Projects() {
	const projectList = [{projectName: 'pyramid-3d'}, {projectName: 'oop-tech'}, 
	{projectName: 'cs-tech', projectLiveURL: 'https://pepeyen.github.io/cs-tech'}, {projectName: 'efrederick-cli', projectLiveURL: 'this'}, 
	{projectName: 'efrederick', projectLiveURL: 'https://efrederick.dev'}, {projectName: 'namah-front-end', projectLiveURL: 'https://pepeyen.github.io/namah-front-end'}, 
	{projectName: 'namah-back-end', projectLiveURL: 'https://project-namah.herokuapp.com'}];

    return (
      <React.Fragment> 
        <p className = "cli__info">Running: <strong className = "cli__source"> Projects.sh</strong></p><br></br>
        <ul className = "cli__output-text">
			{
				projectList.map((element, index) => {
					if(element.projectLiveURL){
						if(element.projectLiveURL === 'this'){
							return(
								<li
									key={index}
									className = "cli__project"
								>
									{element.projectName} <a className = "cli__link" href={`https://github.com/pepeyen/${element.projectName}`} target="_blank" rel="noopener noreferrer">&lt;repo&gt;</a>  &lt;this webapp&gt;
								</li>
							);
						}else{
							return(
								<li
									key={index}
									className = "cli__project"
								>
									{element.projectName} <a className = "cli__link" href={`https://github.com/pepeyen/${element.projectName}`} target="_blank" rel="noopener noreferrer">&lt;repo&gt;</a> <a className="cli__link" href={element.projectLiveURL} target="_blank" rel="noopener noreferrer">&lt;live&gt;</a>
								</li>
							);
						}
					}else{
						return(
							<li
								key={index}
								className = "cli__project"
							>
								{element.projectName} <a className = "cli__link" href={`https://github.com/pepeyen/${element.projectName}`} target="_blank" rel="noopener noreferrer">&lt;repo&gt;</a> <span className="deactivated">&lt;live&gt;</span>
							</li>
						);
					}
				})
			}
        </ul>
      </React.Fragment>
    );
}

export default Projects;