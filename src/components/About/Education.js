import React from 'react';

const Education = () => (
    <div className="about-education">
        <img className="seal-img" src="/imgs/seal.png" />
        <div className="majors">
            <div className="major-title">Majors</div>
                <a href="https://math.berkeley.edu/programs/undergraduate/major/applied" target="_blank">
                    <div className="major">
                        Applied Mathematics with a Concentration in Data Science
                        <div className="major-helper">B.A.</div>
                    </div>
                </a>
                <a href="https://eecs.berkeley.edu/academics/undergraduate/cs-ba" target="_blank">
                    <div className="major">
                        Computer Science
                        <div className="major-helper">B.A.</div>
                    </div>
                </a>
        </div>
    </div>
)

export default Education;