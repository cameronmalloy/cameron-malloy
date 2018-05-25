import React from 'react';
import TeachingMain from './TeachingMain';
import TeachingInfo from './TeachingInfo';

const TeachingContainer = (props) => (
    <div className="container-main">
        <TeachingMain location={props.location}/>
        <TeachingInfo/>
    </div>
)

export default TeachingContainer;