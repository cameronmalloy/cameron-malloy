import React from 'react';

const Education = () => (
    <div className="about-education">
        <img className="seal-img" src="/imgs/seal.png" />
        <div className="majors">
            <div className="major-title">Majors</div>
                <a href="https://math.berkeley.edu/programs/undergraduate/major/applied" target="_blank">
                    <div className="major">
                        Applied Mathematics, focus in Statisticsv
                        <div className="major-helper">B.A.</div>
                    </div>
                </a>
                <a href="https://data.berkeley.edu/degrees/data-science-ba" target="_blank">
                    <div className="major">
                        Data Science, focus in Business Analytics
                        <div className="major-helper">B.A.</div>
                    </div>
                </a>
        </div>
    </div>
)

export default Education;