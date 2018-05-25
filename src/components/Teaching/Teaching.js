import React from 'react';
import TeachingContainer from './TeachingContainer';

const Teaching = (props) => (
    <div>
        <TeachingContainer location={props.location.pathname} />
    </div>
)

export default Teaching;