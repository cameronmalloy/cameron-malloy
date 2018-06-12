import React from 'react';
import YoutubeEmbedVideo from 'youtube-embed-video';
import TitleMain from '../TitleMain.js';

const TeachingMain = (props) => {
    if (props.location.length < 11) {
        return (
            <div className="container-main-main">
                <TitleMain title={"Teaching Info"} />
                <div className="teaching-email">
                    email: cmalloy@berkeley.edu
                </div>
                <div className="teaching-email-desc">
                    I get a ton of emails, and I funnel all of them from all my accounts (personal, school, work)
                    into one then sort them from there. It would really help me if you put [STUDENT] at the
                    beginning of the subject line and I'll get back to you even faster!
                </div>
                <div className="line"></div>
                <div className="teaching-title">My CS 61A Sections</div>
                <div className="teaching-locations">
                    <div className="teaching-named-title">Lab 14 [T/TH]: </div>
                    <div className="teaching-named-desc">2:30-4pm - 273 Soda</div>
                </div>
                <div className="teaching-locations">
                    <div className="teaching-named-title">Disucssion 104 [M/W]: </div>
                    <div className="teaching-named-desc">2:30-4pm - 310 Soda</div>
                </div>
                <div className="teaching-locations">
                    <div className="teaching-named-title">Office Hours [Th]: </div>
                    <div className="teaching-named-desc">10-11am - 521 Cory</div>
                </div>
                <div className="teaching-locations">
                    <div className="teaching-named-title">HW Party [F]: </div>
                    <div className="teaching-named-desc">3-4pm - 521 Cory</div>
                    <div className="small-margin-top">
                        <a href="https://calendar.google.com/calendar/selfsched?sstoken=UU9NS0g3dEotR1hyfGRlZmF1bHR8M2MxZjUyZGJjYTBiZmNhZTE5ZTZmNjY3NWIyNTE1NGE" target="_blank">
                            <button className="appointment-button">Book an Appointment Here</button>
                        </a>
                    </div>
                </div>
                <div className="line"></div>
                <div className="teaching-title">My Data 8 Lab Assist Section</div>
                <div className="teaching-locations">
                    <div className="teaching-named-title">Lab [M/W]: </div>
                    <div className="teaching-named-desc">11am-1pm</div>
                </div>
            </div>
        )
    } else {
        const location = props.location;
        const num = location.charAt(10);
        const num2 = location.charAt(11);
        if (num == 0 && num2 == 0) {
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
        } else if (num == 0 && num2 == 1) {
            return (
                <div className="container-main-main">
                    <TitleMain title={"Panic! Boheian Rhapsody"} />
                    <div className="teaching-video">
                        <YoutubeEmbedVideo
                            videoId="irK0Su5SE2Y"
                            suggestions={false}
                            width={640}
                            height={540}/>
                    </div>
                </div>
            )
        }
    }
}

export default TeachingMain;
