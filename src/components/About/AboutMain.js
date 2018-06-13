import React from 'react';
import TitleMain from '../TitleMain.js';
import AboutMe from './AboutMe.js';
import Education from'./Education.js';
import Skills from './Skills.js';

const AboutMain = () => (
            <div className="container-main-main">
                <div className="container-about-main">
                    <TitleMain title={"Get Busy Living, or Get Busy Coding"} />
                </div>
                <AboutMe />
                <Education />
                <Skills />
                <div className="buffer"></div>
            </div>
)

export default AboutMain;