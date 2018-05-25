import React from 'react';
import YoutubeEmbedVideo from 'youtube-embed-video';
import TitleMain from '../TitleMain.js';

const TeachingMain = (props) => {
    if (props.location.length < 11) {
        return (
            <div className="container-main-main">
                <TitleMain title={"Resources"} />
            </div>
        )
    } else {
        const location = props.location;
        const num = location.charAt(10);
        if (num == 0) {
            return (
                <div className="container-main-main">
                    <TitleMain title={"Test (Lego)"} />
                    <div className="teaching-video">
                        <YoutubeEmbedVideo
                            videoId="RnDC9MXSqCY"
                            suggestions={false}
                            width={640}
                            height={360}/>
                    </div>
                </div>
            )
        } else if (num == 1) {
            return (
                <div className="container-main-main">
                    <TitleMain title={"Panic! Boheian Rhapsody"} />
                    <div className="teaching-video">
                        <YoutubeEmbedVideo
                            videoId="irK0Su5SE2Y"
                            suggestions={false}
                            width={960}
                            height={540}/>
                    </div>
                </div>
            )
        }
    }
}

export default TeachingMain;