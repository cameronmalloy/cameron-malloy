import React from 'react';
import { NavLink } from 'react-router-dom';

/*const TeachingInfo = () => (
    <div className="container-main-info">
        <NavLink to="/teaching/0">
            <div className="video-block">
                Lego Test
            </div>
        </NavLink>
        <NavLink to="/teaching/1">
            <div className="video-block">
                Non-Lego Test
            </div>
        </NavLink>
    </div>
)*/

export default class TeachingInfo extends React.Component {
    constructor() {
        super();
        this.state = { videos: undefined }
        this.handleSelectVideo = this.handleSelectVideo.bind(this);
    }

    handleSelectVideo(num) {
        this.setState(
            { videos: num }
        );
    }

    render() {
        const url = document.URL;
        if (url.charAt(url.length - 1) == 'g') {
            this.setState(
                { videos: undefined }
            );
        }
        return (
            <div className="container-main-info">
                <NavLink to="/teaching/0">
                    <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 0) ? "video-block-active" : "video-block"}>
                        Lego Test
                    </button>
                </NavLink>
                <NavLink to="/teaching/1">
                    <button onClick={(e) => this.handleSelectVideo(1)} className={(this.state.videos == 1) ? "video-block-active" : "video-block"}>
                        Non-Lego Test
                    </button>
                    
                </NavLink>
            </div>
        )
    }
}