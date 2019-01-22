import React from 'react';
import { Link } from 'react-router-dom'

const AboutInfo = () => (
    <div className="container-main-info">
        <div className="info-panel">
            <img className="info-panel-img" src="imgs/info-pic.jpg" />
            <div className="button-block">
                <img className="social-media-icon" src="imgs/facebook_circle.png" />
                <a href="./../../pdfs/cameron_resumepdf.pdf" target="_blank">
                    <button className="resume-button">Resume</button>
                </a>
                <a href="https://www.linkedin.com/in/cameron-malloy/" target="_blank">
                    <img className="social-media-icon" src="imgs/linkedin_circle.png" />
                </a>
                <div className="email-text">Contact: cmalloy@berkeley.edu</div>
            </div>
        </div>
        <div className="buffer"></div>
    </div>
)

export default AboutInfo;