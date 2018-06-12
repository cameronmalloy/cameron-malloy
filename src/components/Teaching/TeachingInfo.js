import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeUpdate from '../Home/HomeUpdate.js'

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
        const lastChar = url.charAt(url.length - 1);
        if (lastChar == 'g') {
            this.setState(
                { videos: undefined }
            );
        } else {
            this.handleSelectVideo(lastChar);
        }
        console.log(url.charAt(url.length - 1))
        return (
            <div className="container-main-info">
                <div className="teaching-info-block">
                    <div className="teaching-info-title-title">CS 61A</div>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 0) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Lego test" highlights="Testing"date="6/11/18" link="/teaching/00" />
                        </button>
                </div>
                <div className="teaching-info-block">
                    <div className="teaching-info-title-title">Data 8</div>
                        <button onClick={(e) => this.handleSelectVideo(1)} className={(this.state.videos == 1) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Bohemian Test" highlights="Testing Again"date="6/11/18" link="/teaching/01" />
                        </button>
                </div>
            </div>
        )
    }
}