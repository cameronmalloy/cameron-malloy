import React from 'react';
import HomeUpdate from './HomeUpdate.js'

const HomeInfo = () => (
    <div className="container-main-info">
        <div className="two-rem-text">
            <div className="info-title-title">Updates</div>
            <div className="seventy-five-percent-container">
                <HomeUpdate title="Updated Dynamacy" highlights="Home Page, Header" date="6/11/18" link="/" />
                <HomeUpdate title="Updated About Page" highlights="Works better with smaller webpage sizes" date="6/10/18" link="/about" />
                <HomeUpdate title="Added Github Link" highlights="Restaurant Project" date="6/10/18" link="projects1" />
            </div>
        </div>
    </div>
)

export default HomeInfo;