import React from 'react';
import HomeUpdate from '../Home/HomeUpdate.js'
import HomeUpdateAnchor from '../Home/HomeUpdateAnchor.js'

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
        return (
            <div className="container-main-info">
                <div className="teaching-info-block">
                    <div className="teaching-info-title-title">CS 61A</div>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 5) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Week 4" highlights="((((SCHEME))))" date="7/10/18" link="/teaching/05" /> 
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 4) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Week 3" highlights="Lists, Trees, and Midterm REVIEW" date="7/3/18" link="/teaching/04" /> 
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 3) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Week 2" highlights="HOF, Lambdas, & Recursion" date="6/24/18" link="/teaching/03" /> 
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 2) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Week 1" highlights="Functions & Control" date="6/23/18" link="/teaching/02" /> 
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 0) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Ghetto Spiderman" highlights="Testing" date="6/11/18" link="/teaching/00" />
                        </button>
                </div>
                <div className="teaching-info-block">
                    <div className="teaching-info-title-title">Data 8</div>
                        <button onClick={(e) => this.handleSelectVideo(1)} className={(this.state.videos == 1) ? "video-block-active" : "video-block"}>
                            <HomeUpdateAnchor title="Data and Tables" highlights="Week 2" date="6/23/18" link="../../../pdfs/data8su18datatables.pdf" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(1)} className={(this.state.videos == 1) ? "video-block-active" : "video-block"}>
                            <HomeUpdateAnchor title="Strings, Importing, and Numpy" highlights="Week 1" date="6/13/18" link="../../../pdfs/data8su18numpy.pdf" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(1)} className={(this.state.videos == 1) ? "video-block-active" : "video-block"}>
                            <HomeUpdateAnchor title="Introduction" highlights="Week 1" date="6/11/18" link="../../../pdfs/data8su18intro.pdf" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(1)} className={(this.state.videos == 1) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Bohemian Test" highlights="Testing Again" date="6/11/18" link="/teaching/01" />
                        </button>
                </div>
                <div className="buffer"></div>
            </div>
        )
    }
}