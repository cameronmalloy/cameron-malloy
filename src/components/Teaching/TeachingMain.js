import React from 'react';
import YoutubeEmbedVideo from 'youtube-embed-video';
import TitleMain from '../TitleMain.js';

const TeachingMain = (props) => {
    console.log(props.location)
    if (props.location.length < 11) {
        return (
            <div className="container-main-main">
                <TitleMain title={"Teaching Info"} />
                <div className="teaching-email">
                    email: cmalloy@berkeley.edu
                </div>
                <div className="teaching-email-desc">
                    Feel free to email me anytime with any questions or concerns regarding 61A or anything at all and I'll try 
                    to get back to you by the end of the day.
                </div>
                <div className="line"></div>
                <div className="teaching-title">My CS 61A Sections</div>
                <div className="teaching-locations">
                    <div className="teaching-named-title">Lab 113L [TUES]: </div>
                    <div className="teaching-named-desc">9:30-11am - 275 Soda</div>
                </div>
                <div className="teaching-locations">
                    <div className="teaching-named-title">Disucssion 112 [THURS]: </div>
                    <div className="teaching-named-desc">9:30-11am - 220 Wheeler</div>
                </div>
                <div className="teaching-locations">
                    <div className="teaching-named-title">Office Hours [THURS]:</div>
                    <div className="teaching-named-desc">4-5pm - 109 Wheeler</div>
                </div>
                <div className="small-margin-top"></div>
                <div className="line"></div>
                <div className="teaching-title">Appointments</div>
                <div className="teaching-email-desc">
                    You can book a 15 minute 1 on 1 appointment with me about anything like 61A homework, advice, sports, TV, whatever.
                    Feel free to book more than one appointment with me on any diven day/week. If you need 30 minutes then book two in
                    a row, no probs.
                    <div className="small-margin-top">
                        <a href="https://calendar.google.com/calendar/selfsched?sstoken=UU9NS0g3dEotR1hyfGRlZmF1bHR8M2MxZjUyZGJjYTBiZmNhZTE5ZTZmNjY3NWIyNTE1NGE" target="_blank">
                            <button className="appointment-button">Book an Appointment Here</button>
                        </a>
                    </div>
                    When making an appointment, please make one 2 days in advance so I can book a room. Do not put anything in the "Where"
                    section, but do please put your name and purpose of the appointment in the Description.
                </div>
                <div className="buffer"></div>
            </div>
        )
    } else {
        const location = props.location;
        const num = location.charAt(10);
        const num2 = location.charAt(11);
        if (num == 0 && num2 == 0) {
            return (
                <div className="container-main-main">
                    <TitleMain title={"Ghetto Spiderman"} />
                    <div className="teaching-video">
                        <YoutubeEmbedVideo
                            videoId="iDXIa8ivFEc"
                            suggestions={false}
                            width={640}
                            height={360}/>
                    </div>
                    <div className="buffer"></div>
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
                            height={360}/>
                    </div>
                    <div className="buffer"></div>
                </div>
            )
        } else if (num == 0 && num2 == 2) {
            return (
                <div className="container-main-main">
                    <TitleMain title={"Week 2"} />
                    <div className="teaching-title">Summary</div>
                    <div className="teaching-email-desc">
                        We introduced python this week. We learned about expressions, statements, and how python works with assignment statements.
                        We learned more statements, such as def statements which allows us to create function objects to further enhance our code.
                        We also learned that def statements can be nested within def statements (HOF).
                        Control, such as if statements and while loops came to fruition, which also came along with the importance of conditional statements
                        driven by boolean expressions.
                    </div>
                    <div className="line"></div>
                    <div className="teaching-title">Important Links</div>
                    <div className="teaching-locations">
                        <div className="small-margin-top">
                            <a href="https://docs.google.com/presentation/d/1btI-jZvpctWRJSdfMA6wxMBxkODeIKf_-S-6ZBz4luo/edit?usp=sharing" target="_blank">
                                <button className="appointment-button">Discussion 01 Slides: Return vs Print, Assignment Statements, and Short Circuiting</button>
                            </a>               
                        </div>
                        <div>
                            <a href="http://pythontutor.com/composingprograms.html#mode=edit" target="_blank">
                                <button className="appointment-button">Python Tutor</button>
                            </a>               
                        </div>
                        <div>
                            <a href="https://docs.google.com/spreadsheets/d/1W-7AA5TR599y82hrP6gVlS5wvb5JICAPp7bfocnpVGs/edit#gid=0" target="_blank">
                                <button className="appointment-button">Week 2 Student Statistics</button>
                            </a>               
                        </div>
                    </div>
                    <div className="buffer"></div>
                </div>
            )
        }  
    }
}

export default TeachingMain;
