import React from 'react';

const Education = () => (
    <div className="about-education">
        <img className="seal-img" src="/imgs/seal.png" />
        <div className="majors">
            <div className="major-title">Majors</div>
                <a href="https://math.berkeley.edu/programs/undergraduate/major/applied" target="_blank">
                    <div className="major">
                        Applied Mathematics, focus in Economics
                        <div className="major-helper">B.A.</div>
                    </div>
                </a>
                <a href="http://guide.berkeley.edu/undergraduate/degree-programs/data-science/" target="_blank">
                    <div className="major">
                        Data Science, focus in Mathematics and Modeling
                        <div className="major-helper">B.A.</div>
                    </div>
                </a>
        </div>
    </div>
)

export default Education;