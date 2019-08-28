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
                    <div className="teaching-named-title">Lab 157C [MON]: </div>
                    <div className="teaching-named-desc">3-4:30pm - 330 Soda</div>
                </div>
                <div className="teaching-locations">
                    <div className="teaching-named-title">Disucssion 102B [THURS]: </div>
                    <div className="teaching-named-desc">3-4:30pm - 320 Soda</div>
                </div>
                <div className="teaching-locations">
                    <div className="teaching-named-title">Office Hours [TBD]:</div>
                    <div className="teaching-named-desc">TBD</div>
                </div>
                <div className="small-margin-top"></div>
                <div className="line"></div>
                <div className="teaching-title">Appointments [Appointments start 2nd week of class]</div>
                <div className="teaching-email-desc">
                    You can book a 15 minute 1 on 1 appointment with me about anything like 61A homework, advice, sports, TV, whatever.
                    Feel free to book more than one appointment with me on any diven day/week. If you need 30 minutes then book two in
                    a row, no probs.
                    <div className="small-margin-top">
                        <a href="https://calendar.google.com/calendar/selfsched?sstoken=UU9NS0g3dEotR1hyfGRlZmF1bHR8M2MxZjUyZGJjYTBiZmNhZTE5ZTZmNjY3NWIyNTE1NGE" target="_blank">
                            <button className="appointment-button">Book an Appointment Here</button>
                        </a>
                    </div>
                    When making an appointment, try to book it a day in advance so I have time to book a room. Do not put anything in the "Where"
                    section, but do please put your name and purpose of the appointment in the Description.
                </div>
                <div className="line"></div>
                <div className="teaching-title">Challenge Problems</div>
                <div className="teaching-email-desc">
                    <div className="small-margin-top">
                        <a href="../../../Challenge_Problems.html" target="_blank">
                            <button className="appointment-button">Link to Problems</button>
                        </a>
                    </div>
                </div>
                <div className="teaching-locations">
                    <div className="teaching-named-title">Problems Posted Thus Far:</div>
                </div>
                <div className="teaching-email-desc">
                    <ol>
                        <li>While Loops and Control</li>
                        <li>Higher Order Functions</li>
                        <li>Tree Recursion (2 problems)</li>
                        <li>OOP (build a class)</li>
                        <li>Trees (2 problems, 1 BTree)</li>
                        <li>Linked Lists</li>
                        <li>Scheme List Construction</li>
                    </ol>
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
                    <div className="small-margin-top">
                        <a href="http://www.cameronmalloy.com/teaching">
                            <button className="appointment-button">Return to Teaching Landing Page</button>
                        </a>
                    </div>
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
                    <div className="small-margin-top">
                        <a href="http://www.cameronmalloy.com/teaching">
                            <button className="appointment-button">Return to Teaching Landing Page</button>
                        </a>
                    </div>
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
                    <div className="small-margin-top">
                        <a href="http://www.cameronmalloy.com/teaching">
                            <button className="appointment-button">Return to Teaching Landing Page</button>
                        </a>
                    </div>
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
        } else if (num == 0 && num2 == 3) {
            return (
                <div className="container-main-main">
                    <div className="small-margin-top">
                        <a href="http://www.cameronmalloy.com/teaching">
                            <button className="appointment-button">Return to Teaching Landing Page</button>
                        </a>
                    </div>
                    <TitleMain title={"Week 3"} />
                    <div className="teaching-title">Summary</div>
                    <div className="teaching-email-desc">
                        This week we introduced control (if statements), iteration (while loops), and functions which allows us to succinctly write code and consolidate consolidate
                        code into one "block". We also learned how to run a block of code multiple times through loops and functions.
                        We also learned how to diagram functions out to make sense of how python is reading the code we write.
                    </div>
                    <div className="line"></div>
                    <div className="teaching-title">Important Links</div>
                    <div className="teaching-locations">
                        <div>
                            <a href="https://docs.google.com/presentation/d/1aknuccp4SAodY8CHi9SpBx2_o17840RpDTgNFwv_A8U/edit#slide=id.p" target="_blank">
                                <button className="appointment-button">Midterm 1 Review (Environment Diagrams and WWPP)</button>
                            </a>               
                        </div>
                        <div>
                            <a href="http://pythontutor.com/composingprograms.html#mode=edit" target="_blank">
                                <button className="appointment-button">Python Tutor</button>
                            </a>               
                        </div>
                        <div>
                            <a href="https://docs.google.com/spreadsheets/d/1W-7AA5TR599y82hrP6gVlS5wvb5JICAPp7bfocnpVGs/edit#gid=901491921" target="_blank">
                                <button className="appointment-button">Week 3 Student Statistics</button>
                            </a>               
                        </div>
                    </div>
                    <div className="buffer"></div>
                </div>
            )
        } else if (num == 0 && num2 == 4) {
            return (
                <div className="container-main-main">
                    <div className="small-margin-top">
                        <a href="http://www.cameronmalloy.com/teaching">
                            <button className="appointment-button">Return to Teaching Landing Page</button>
                        </a>
                    </div>
                    <TitleMain title={"Week 4"} />
                    <div className="teaching-title">Summary</div>
                    <div className="teaching-email-desc">
                        This week was all about recursion. Recursive calls and multipel recursive calls (tree recursion). The key thing 
                        to take away from this week is to get comfortable with the leap of faith. It will make recursion a lot easier
                        to understand once you trust the leap of faith.
                    </div>
                    <div className="line"></div>
                    <div className="teaching-title">Important Links</div>
                    <div className="teaching-locations">
                        <div>
                            <a href="http://pythontutor.com/composingprograms.html#mode=edit" target="_blank">
                                <button className="appointment-button">Python Tutor</button>
                            </a>               
                        </div>
                        <div>
                            <a href="https://docs.google.com/spreadsheets/d/1W-7AA5TR599y82hrP6gVlS5wvb5JICAPp7bfocnpVGs/edit#gid=399085859" target="_blank">
                                <button className="appointment-button">Week 4 Student Statistics</button>
                            </a>               
                        </div>
                    </div>
                    <div className="buffer"></div>
                </div>
            )
        } else if (num == 0 && num2 == 5) {
            return (
                <div className="container-main-main">
                    <div className="small-margin-top">
                        <a href="http://www.cameronmalloy.com/teaching">
                            <button className="appointment-button">Return to Teaching Landing Page</button>
                        </a>
                    </div>
                    <TitleMain title={"Week 5"} />
                    <div className="teaching-title">Summary</div>
                    <div className="teaching-email-desc">
                        Data storage was the name of the game this week. We learned how we can store multiple different values in
                        things called lists. We could also store them in a data structure called trees. We learned many ways to
                        manipulate lists as well as how to approach tree problems recursively.
                    </div>
                    <div className="line"></div>
                    <div className="teaching-title">Important Links</div>
                    <div className="teaching-locations">
                        <div>
                            <a href="http://pythontutor.com/composingprograms.html#mode=edit" target="_blank">
                                <button className="appointment-button">Python Tutor</button>
                            </a>               
                        </div>
                        <div>
                            <a href="https://docs.google.com/spreadsheets/d/1W-7AA5TR599y82hrP6gVlS5wvb5JICAPp7bfocnpVGs/edit#gid=111096581" target="_blank">
                                <button className="appointment-button">Week 5 Student Statistics</button>
                            </a>               
                        </div>
                    </div>
                    <div className="buffer"></div>
                </div>
            )
        } else if (num == 0 && num2 == 9) {
            return (
                <div className="container-main-main">
                    <div className="small-margin-top">
                        <a href="http://www.cameronmalloy.com/teaching">
                            <button className="appointment-button">Return to Teaching Landing Page</button>
                        </a>
                    </div>
                    <TitleMain title={"Week 6"} />
                    <div className="teaching-title">Summary</div>
                    <div className="teaching-email-desc">
                        MUTABLE VALUES AND MUTABLE FUNCTIONS AND CLASSES WOO!
                    </div>
                    <div className="line"></div>
                    <div className="teaching-title">Important Links</div>
                    <div className="teaching-locations">
                        <div>
                            <a href="https://docs.google.com/presentation/d/1lxSYwv5hy930Nly811ZPOHHu2e6wxEb9PFNSs3eXris/edit?usp=sharing" target="_blank">
                                <button className="appointment-button">OOP Example & Vocabulary</button>
                            </a>               
                        </div>
                        <div>
                            <a href="http://pythontutor.com/composingprograms.html#mode=edit" target="_blank">
                                <button className="appointment-button">Python Tutor</button>
                            </a>               
                        </div>
                        <div>
                            <a href="https://docs.google.com/spreadsheets/d/1W-7AA5TR599y82hrP6gVlS5wvb5JICAPp7bfocnpVGs/edit#gid=1551709292" target="_blank">
                                <button className="appointment-button">Week 6 Student Statistics</button>
                            </a>               
                        </div>
                    </div>
                    <div className="buffer"></div>
                </div>
            )
        } else if (num == 1 && num2 == 0) {
            return (
                <div className="container-main-main">
                    <div className="small-margin-top">
                        <a href="http://www.cameronmalloy.com/teaching">
                            <button className="appointment-button">Return to Teaching Landing Page</button>
                        </a>
                    </div>
                    <TitleMain title={"Week 7"} />
                    <div className="teaching-title">Summary</div>
                    <div className="teaching-email-desc">
                        INHERITANCE
                    </div>
                    <div className="line"></div>
                    <div className="teaching-title">Important Links</div>
                    <div className="teaching-locations">
                        <div>
                            <a href="https://docs.google.com/presentation/d/1ocfuUKcXimAcDhicAxx_L7cMVlb1NuzNhGezXHpPbPA/edit?usp=sharing" target="_blank">
                                <button className="appointment-button">OOP Example & Misconceptions</button>
                            </a>               
                        </div>
                        <div>
                            <a href="http://pythontutor.com/composingprograms.html#mode=edit" target="_blank">
                                <button className="appointment-button">Python Tutor</button>
                            </a>               
                        </div>
                        <div>
                            <a href="https://docs.google.com/spreadsheets/d/1W-7AA5TR599y82hrP6gVlS5wvb5JICAPp7bfocnpVGs/edit#gid=1179909380" target="_blank">
                                <button className="appointment-button">Week 7 Student Statistics</button>
                            </a>               
                        </div>
                    </div>
                    <div className="buffer"></div>
                </div>
            )
        } else if (num == 1 && num2 == 1) {
            return (
                <div className="container-main-main">
                    <div className="small-margin-top">
                        <a href="http://www.cameronmalloy.com/teaching">
                            <button className="appointment-button">Return to Teaching Landing Page</button>
                        </a>
                    </div>
                    <TitleMain title={"Week 8"} />
                    <div className="teaching-title">Summary</div>
                    <div className="teaching-email-desc">
                        LINKED LISTS AND MUTABLE TREEEEEES!
                    </div>
                    <div className="line"></div>
                    <div className="teaching-title">Important Links</div>
                    <div className="teaching-locations">
                        <div>
                            <a href="https://docs.google.com/presentation/d/1h0up7uRD3QvK7WrKgM_Tq2BKiuOQUdH_zQqhNVz5TxU/edit?usp=sharing" target="_blank">
                                <button className="appointment-button">Mutable Trees Examples</button>
                            </a>               
                            <a href="https://inst.eecs.berkeley.edu/~cs61a/su18/disc/disc09.pdf" target="_blank">
                                <button className="appointment-button">Link to Questions for Slides for the Examples</button>
                            </a>               
                        </div>
                        <div>
                            <a href="http://pythontutor.com/composingprograms.html#mode=edit" target="_blank">
                                <button className="appointment-button">Python Tutor</button>
                            </a>               
                        </div>
                        <div>
                            <a href="https://docs.google.com/spreadsheets/d/1W-7AA5TR599y82hrP6gVlS5wvb5JICAPp7bfocnpVGs/edit#gid=1016191406" target="_blank">
                                <button className="appointment-button">Week 8 Student Statistics</button>
                            </a>               
                        </div>
                    </div>
                    <div className="buffer"></div>
                </div>
            )
        } else if (num == 1 && num2 == 2) {
            return (
                <div className="container-main-main">
                    <div className="small-margin-top">
                        <a href="http://www.cameronmalloy.com/teaching">
                            <button className="appointment-button">Return to Teaching Landing Page</button>
                        </a>
                    </div>
                    <TitleMain title={"Week 11"} />
                    <div className="teaching-title">Summary</div>
                    <div className="teaching-email-desc">
                            We introduced a new language! You might be thinking, why would we learn a new language? Well it's because
                            we're trying to teach more than just a language. We're trying to teach you the fundamentals of computer
                            science. It doesn't matter which language you're using, the concepts are still the same. Even in a completely
                            different (and arguably harder) language than python, most of the concepts are the same. Functions, variables,
                            environments, etc. all work the same way.
                    </div>
                    <div className="line"></div>
                    <div className="teaching-title">Important Links</div>
                    <div className="teaching-locations">
                        <div>
                            <a href="../../../pdfs/lab6slides.pptx" target="_blank">
                                <button className="appointment-button">Scheme Slides</button>
                            </a>               
                        </div>
                        <div>
                            <a href="https://scheme.cs61a.org/" target="_blank">
                                <button className="appointment-button">Scheme Interpreter</button>
                            </a>               
                        </div>
                        <div>
                            <a href="https://docs.google.com/spreadsheets/d/1W-7AA5TR599y82hrP6gVlS5wvb5JICAPp7bfocnpVGs/edit#gid=735317874" target="_blank">
                                <button className="appointment-button">Week 11 Statistics</button>
                            </a>               
                        </div>
                    </div>
                    <div className="buffer"></div>
                </div>
            )
        } else if (num == 1 && num2 == 3) {
            return (
                <div className="container-main-main">
                    <div className="small-margin-top">
                        <a href="http://www.cameronmalloy.com/teaching">
                            <button className="appointment-button">Return to Teaching Landing Page</button>
                        </a>
                    </div>
                    <TitleMain title={"Week 12"} />
                    <div className="teaching-title">Summary</div>
                    <div className="teaching-email-desc">
                        INTERPRETERS BABY
                    </div>
                    <div className="line"></div>
                    <div className="teaching-title">Important Links</div>
                    <div className="teaching-locations">
                        <div>
                            <a href="../../../pdfs/repl.pdf" target="_blank">
                                <button className="appointment-button">REPL Lab Notes</button>
                            </a>               
                        </div>
                        <div>
                            <a href="https://scheme.cs61a.org/" target="_blank">
                                <button className="appointment-button">Scheme Interpreter</button>
                            </a>               
                        </div>
                        <div>
                            <a href="https://docs.google.com/spreadsheets/d/1W-7AA5TR599y82hrP6gVlS5wvb5JICAPp7bfocnpVGs/edit#gid=758832898" target="_blank">
                                <button className="appointment-button">Week 12 Student Statistics</button>
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