import React from 'react';
import { NavLink } from 'react-router-dom'

/*const ProjectInfo = () => (
    <div className="container-main-info">
        <div className="project-info-container">
            <NavLink to="/projects1">
                <div className="project-item">
                    <img className="info-panel-img" src="/imgs/espm-project.png" />
                    <div className="project-title"> What Should I Eat Today (Berkeley)</div>
                    <div className="project-description">
                        Statistically analyze the difference in prices between restaurants closer to where student's live compared to where student's don't typically live.
                    </div>
                </div>
            </NavLink>
            <NavLink to="/projects2">
                <div className="project-item">
                    <img className="info-panel-img" src="/imgs/project2.png" />
                    <div className="project-title"> Machine Learning and MyoElectricity</div>
                    <div className="project-description">
                        Team of 5: Creates an android app that uses a 3rd party armband to predict user's intent of motion in forearm and hand.
                    </div>
                </div>
            </NavLink>
        </div>
    </div>
)*/

export default class ProjectInfo extends React.Component {
    constructor() {
        super();
        this.state = { projects: undefined }
        this.handleSelectProject = this.handleSelectProject.bind(this);
    }

    handleSelectProject(num) {
        this.setState(
            {projects: num}
        );
    }

    render() {
        const url = document.URL;
        if (url.charAt(url.length - 1) == 's') {
            this.setState(
                {projects:undefined}
            );
        }
        return (
            <div className="container-main-info">
                <div className="project-info-container">
                    <NavLink to="/projects1">
                        <div onClick={(e) => this.handleSelectProject(0)} className={(this.state.projects == 0) ? "project-item-active" : "project-item"}>
                            <img className="info-panel-img" src="/imgs/espm-project.png" />
                            <div className="project-title"> What Should I Eat Today (Berkeley)</div>
                            <div className="project-description">
                                Statistically analyze the difference in prices between restaurants closer to where student's live compared to where student's don't typically live.
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/projects2">
                        <div onClick={(e) => this.handleSelectProject(1)} className={(this.state.projects == 1) ? "project-item-active" : "project-item"}>
                            <img className="info-panel-img" src="/imgs/project2.png" />
                            <div className="project-title"> Machine Learning and MyoElectricity</div>
                            <div className="project-description">
                                Team of 5: Created an android app that uses a 3rd party armband to predict user's intent of motion in forearm and hand.
                            </div>
                        </div>
                    </NavLink>
                    <div className="buffer"></div>
                </div>
            </div>
        )
    }
}

//export default ProjectInfo;