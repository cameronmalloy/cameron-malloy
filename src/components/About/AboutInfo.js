import React from 'react';
import { Link } from 'react-router-dom'

const AboutInfo = () => (
    <div className="container-main-info">
        <div className="info-panel">
            <img className="info-panel-img" src="imgs/info-pic.jpg" />
            <div className="button-block">
                <img className="social-media-icon" src="imgs/facebook_circle.png" />
                <Link to="/resume"><button className="resume-button">Resume</button></Link>
                <img className="social-media-icon" src="imgs/linkedin_circle.png" />
                <div className="email-text">Contact: cmalloy@berkeley.edu</div>
            </div>
        </div>
        <div className="buffer"></div>
    </div>
)

export default AboutInfo;