import React from 'react';
import HomeUpdate from '../Home/HomeUpdate.js'
import HomeUpdateAnchor from '../Home/HomeUpdateAnchor.js'

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
        const penChar = url.charAt(url.length - 2);
        if (lastChar == 'g') {
            this.setState(
                { videos: undefined }
            );
        } else {
            if (penChar == 1) {
                this.handleSelectVideo(parseInt(penChar) * 10 + parseInt(lastChar))
                console.log(10 + parseInt(lastChar));
            }
            else {
                this.handleSelectVideo(parseInt(lastChar));
            }
        }
        return (
            <div className="container-main-info">
                <div className="teaching-info-block">
                    <div className="teaching-info-title-title">CS 61A</div>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 0) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Week 1" highlights="Funny Video" date="1/22/19" link="/teaching/00" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 2) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Week 2" highlights="Intro to Python" date="1/31/19" link="/teaching/02" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 3) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Week 3" highlights="Functions and Control" date="2/7/19" link="/teaching/03" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 4) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Week 4" highlights="Recursion" date="2/14/19" link="/teaching/04" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 5) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Week 5" highlights="Lists and Trees" date="2/21/19" link="/teaching/05" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 9) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Week 6" highlights="Mutability" date="2/28/19" link="/teaching/09" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 10) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Week 7" highlights="Inheritance and OOG" date="3/7/19" link="/teaching/10" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 11) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Week 8" highlights="Mutable Trees" date="3/14/19" link="/teaching/11" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 12) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Week 10" highlights="((SCHEME))" date="4/2/19" link="/teaching/12" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(0)} className={(this.state.videos == 12) ? "video-block-active" : "video-block"}>
                            <HomeUpdate title="Week 11" highlights="((SCHEME))" date="4/2/19" link="/teaching/12" />
                        </button>
                </div>
                <div className="teaching-info-block">
                    <div className="teaching-info-title-title">Data 8</div>
                        <button onClick={(e) => this.handleSelectVideo(1)} className={(this.state.videos == 6) ? "video-block-active" : "video-block"}>
                            <HomeUpdateAnchor title="Introduction" highlights="Week 1" date="6/11/18" link="../../../pdfs/data8_introduction.pdf" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(1)} className={(this.state.videos == 7) ? "video-block-active" : "video-block"}>
                            <HomeUpdateAnchor title="Strings, Importing, and Numpy" highlights="Week 1" date="6/13/18" link="../../../pdfs/data8_numpy.pdf" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(1)} className={(this.state.videos == 8) ? "video-block-active" : "video-block"}>
                            <HomeUpdateAnchor title="Data and Tables" highlights="Week 2" date="6/23/18" link="../../../pdfs/data8_data_and_tables.pdf" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(1)} className={(this.state.videos == 8) ? "video-block-active" : "video-block"}>
                            <HomeUpdateAnchor title="Group Join and Pivot" highlights="Week 2" date="6/23/18" link="../../../pdfs/data8_group_join_pivot.pdf" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(1)} className={(this.state.videos == 8) ? "video-block-active" : "video-block"}>
                            <HomeUpdateAnchor title="Modles, Simulation, and Hypothesis Testing" highlights="Week 3" date="7/3/18" link="../../../pdfs/data8_simulation.pdf" />
                        </button>
                        <button onClick={(e) => this.handleSelectVideo(1)} className={(this.state.videos == 8) ? "video-block-active" : "video-block"}>
                            <HomeUpdateAnchor title="A/B Testing" highlights="Week 4" date="7/10/18" link="../../../pdfs/data8_ab_testing.pdf" />
                        </button>
                </div>
                <div className="buffer"></div>
            </div>
        )
    }
}
