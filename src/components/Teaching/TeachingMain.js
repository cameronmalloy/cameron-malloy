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
                    I get a ton of emails, and I funnel all of them from all my accounts (personal, school, work)
                    into one then sort them from there. It would really help me if you put [STUDENT] at the
                    beginning of the subject line and I'll get back to you even faster!
                </div>
                <div className="line"></div>
                <div className="teaching-title">My CS 61A Sections</div>
                <div className="teaching-locations">
                    <div className="teaching-named-title">Lab 14 [M/W]: </div>
                    <div className="teaching-named-desc">2:30-4pm - 273 Soda</div>
                </div>
                <div className="teaching-locations">
                    <div className="teaching-named-title">Disucssion 104 [T/TH]: </div>
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
                    <div className="teaching-named-desc">11am-1pm - 105 Cory</div>
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
                    <TitleMain title={"Week 1"} />
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
                            <a href="https://www.youtube.com/playlist?list=PLx38hZJ5RLZfg6jvEBBtjc5fnc5BclyEb" target="_blank">
                                <button className="appointment-button">Discussion 01 Video Solution Playlist</button>
                            </a>               
                        </div>
                        <div>
                            <a href="http://pythontutor.com/composingprograms.html#mode=edit" target="_blank">
                                <button className="appointment-button">Python Tutor</button>
                            </a>               
                        </div>
                        <div>
                            <a href="https://docs.google.com/spreadsheets/d/16ne2N6F1fmuc7KWQYc_jf_LH8_K1is0rUfrxDHFtk-U/edit?usp=sharing" target="_blank">
                                <button className="appointment-button">Week 1 Student Statistics</button>
                            </a>               
                        </div>
                    </div>
                    <div className="buffer"></div>
                </div>
            )
        } else if (num == 0 && num2 == 3) {
            return (
                <div className="container-main-main">
                    <TitleMain title={"Week 2"} />
                    <div className="teaching-title">Summary</div>
                    <div className="teaching-email-desc">
                        We practiced more environment diagrams, especially harder problems with higher order functions and lambda functions. We discussed
                        the difference between lambda functions and def statements and why lambdas are sometimes preferred. We went over sequences, specifically
                        lists which will be a main data structure thoughout the course. Furthermore we learned a powerful tool, recursion, which is another
                        variation of the loop but involves calling the function you are currently in.
                    </div>
                    <div className="line"></div>
                    <div className="teaching-title">Important Links</div>
                    <div className="teaching-locations">
                        <div className="small-margin-top">
                            <a href="https://docs.google.com/presentation/d/1nMZoDHoOrbgf3rDM5qUGdZniBHj-BDdbh1etG0qgWNk/edit#slide=id.g3c82e405aa_0_278" target="_blank">
                                <button className="appointment-button">Lab 03 Slides: Lambdas</button>
                            </a>               
                        </div>
                        <div>
                            <a href="https://imgur.com/gallery/huihL" target="_blank">
                                <button className="appointment-button">Discussion Video Solutions released later in week. Enjoy mantis shrimp :)</button>
                            </a>               
                        </div>
                        <div>
                            <a href="http://pythontutor.com/composingprograms.html#mode=edit" target="_blank">
                                <button className="appointment-button">Python Tutor</button>
                            </a>               
                        </div>
                        <div>
                            <a href="https://imgur.com/gallery/T44ny1V" target="_blank">
                                <button className="appointment-button">Week 2 Student Statistics released at end of the week :(</button>
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
