import React from 'react';
import HomeUpdate from './HomeUpdate.js'

const HomeInfo = () => (
    <div className="container-main-info">
        <div className="two-rem-text">
            <div className="info-title-title">Updates</div>
            <div className="seventy-five-percent-container">
                <HomeUpdate title="Added Week 5" highlights="OOP" date="7/21/18" link="/teaching/09" />
                <HomeUpdate title="Added Week 4" highlights="Scheme" date="7/10/18" link="/teaching/05" />
                <HomeUpdate title="Added Week 4 Data 8 Notes" highlights="Notes on first 3 Weeks" date="7/5/18" link="/teaching" />
                <HomeUpdate title="Added Week 3 (61A)" highlights="Abstraction" date="7/3/18" link="/teaching/04" />
                <HomeUpdate title="Added Week 2 (61A)" highlights="Functions" date="6/24/18" link="/teaching/03" />
                <HomeUpdate title="Added Week 1 (61A)" highlights="Introduction" date="6/23/18" link="/teaching/02" />
                <HomeUpdate title="Updated Dynamacy" highlights="Home Page, Header" date="6/11/18" link="/" />
                <HomeUpdate title="Updated About Page" highlights="Works better with smaller webpage sizes" date="6/10/18" link="/about" />
                <HomeUpdate title="Added Github Link" highlights="Restaurant Project" date="6/10/18" link="projects1" />
            </div>
        </div>
        <div className="buffer"></div>
    </div>
)

export default HomeInfo;
