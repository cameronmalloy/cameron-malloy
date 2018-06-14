import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeUpdate = (props) => {
    const title = props.title;
    const highlights = props.highlights;
    const date = props.date;
    const link = props.link;
    return (
        <NavLink to={link}>
            <div className = "update-block">
            <div className="update-title">{title}</div>
            <div className="update-highlights">{highlights}</div>
            <div className="update-date">{date}</div>
            </div>
        </NavLink>
    )
}

export default HomeUpdate;