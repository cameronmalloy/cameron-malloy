import React from 'react';
import HomeUpdate from './HomeUpdate.js'

const HomeInfo = () => (
    <div className="container-main-info">
        <div className="two-rem-text">
            <div className="info-title-title">Updates</div>
            <div className="seventy-five-percent-container">
                <HomeUpdate title="Revamped Teaching Section for Fall 2019!" highlights="Students, head over to Teaching Section and check it out!" date="1/22/10" link="/teaching/" />
            </div>
        </div>
        <div className="buffer"></div>
    </div>
)

export default HomeInfo;
