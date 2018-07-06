import React from 'react';

const HomeUpdateAnchor = (props) => {
    const title = props.title;
    const highlights = props.highlights;
    const date = props.date;
    const link = props.link;
    return (
        <a href={link} target="_blank">
            <div className = "update-block">
            <div className="update-title">{title}</div>
            <div className="update-highlights">{highlights}</div>
            <div className="update-date">{date}</div>
            </div>
        </a>
    )
}

export default HomeUpdateAnchor;