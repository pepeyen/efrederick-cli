import React, {
	useEffect,
	useState
} from 'react';
import '../../css/index.scss';
import '../../css/projects.scss';

function Projects() {
	let [projectList, setProjectList] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_BACK_END_HOST}/efrederick/api/v1/projects`,{
			method: 'GET'
		})
		.then(response => {
			return response.json();
		})
		.then(data => {
			setProjectList(data.projects.list);
		});
	},[]);

    return (
      <React.Fragment> 
        <p className = "cli__info">Running: <strong className = "cli__source"> Projects.sh</strong></p><br></br>
        <ul className = "cli__output-text">
			{
				projectList && projectList.length > 0 ?
					projectList.map((element, index) => {
						if(element.repositoryURL){
							if(element.repositoryName === 'efrederick-cli'){
								return(
									<li
										key={index}
										className = "cli__project"
									>
										{element.repositoryName} <a className = "cli__link" href={element.repositoryURL} target="_blank" rel="noopener noreferrer">&lt;repo&gt;</a>  &lt;this webapp&gt;
									</li>
								);
							}else{
								return(
									<li
										key={index}
										className = "cli__project"
									>
										{element.repositoryName} <a className = "cli__link" href={element.repositoryURL} target="_blank" rel="noopener noreferrer">&lt;repo&gt;</a> <a className="cli__link" href={element.repositoryDemoURL} target="_blank" rel="noopener noreferrer">&lt;live&gt;</a>
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
				:
				null
			}
        </ul>
      </React.Fragment>
    );
}

export default Projects;