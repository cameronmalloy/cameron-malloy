import React from 'react';
import TitleMain from '../TitleMain.js';

const HomeMain = () => (
    <div className="container-main-main">
        <TitleMain title={"Cameron Malloy"} />
        <div className="home-padding" />
        <img className="container-main-img" src="/imgs/me.png" />
        <div className="home-label">
            Data Scientist
        </div>
        <div className="home-desc">
            Hi, I'm Cameron. I'm a student and Teaching Assistant at UC Berkeley.
            I love playing around with data and constantly looking to improve all the products and projects I oversee.
        </div>
        <div className="buffer"></div>
    </div>
)


export default HomeMain;