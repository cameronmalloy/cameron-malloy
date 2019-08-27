import React from 'react';

const Skills = () => (
    <div className="skills-container">
        <img className="skills-img" src="imgs/coding.png" />
        <div className="text-skills">
            <div className="skills-title">Professional Skills</div>
            <div className="skills">
                <ul>
                    <li>
                        <div className="slight-padding">Python</div>
                        <div className="line-90"></div>
                        <div className="circle"></div>
                    </li>
                    <li>
                        <div className="slight-padding">Numpy/Pandas/sci-kit learn</div>
                        <div className="line-90"></div>
                        <div className="circle"></div>
                    </li>
                    <li>
                        <div className="slight-padding">SQL</div>
                        <div className="line-80"></div>
                        <div className="circle"></div>
                        <div className="gline-20"></div>
                    </li>
                    <li>
                        <div className="slight-padding">Spark</div>
                        <div className="line-60"></div>
                        <div className="circle"></div>
                        <div className="gline-40"></div>
                    </li>
                    <li>
                        <div className="slight-padding">Java</div>
                        <div className="line-60"></div>
                        <div className="circle"></div>
                        <div className="gline-40"></div>
                    </li>
                    <li>
                        <div className="slight-padding">JavaScript</div>
                        <div className="line-50"></div>
                        <div className="circle"></div>
                        <div className="gline-50"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="text-skills2">
            <div className="skills-title">Coursework</div>
            <div className="skills">
                <ul>
                    <li>CS 189: Machine Learning</li>
                    <li>Stat 140: Probibality for Data Science</li>
                    <li>Data 100: Principles and Techniques of Data Science</li>
                    <li>Math 54 & Math 110: Linear Algebra</li>
                    <li>Math 128A: Numerical Analysis</li>
                    <li>Math 113: Abstract Algebra</li>
                    <li>CS 61B: Data Structures</li>
                </ul>
            </div>
        </div>
    </div>
)

export default Skills;