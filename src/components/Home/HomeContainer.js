import React from 'react';
import HomeMain from './HomeMain';
import HomeInfo from './HomeInfo';
import Footer from '../Footer';

const HomeContainer = () => (
    <div className="container-main">
        <HomeMain />
        <HomeInfo/>
    </div>
)

export default HomeContainer;