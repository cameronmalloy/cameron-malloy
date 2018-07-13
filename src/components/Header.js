import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const url = document.URL;
    const last = url.charAt(url.length - 1);
    const penult = url.charAt(url.length - 2);
    const penpenult = url.charAt(url.length - 3);

    return (
    <div className="header">
        <NavLink to="/">
            <img className="header-title" src="imgs/signature.jpg" />
        </NavLink>
        <div className="header-tabs">
            <NavLink to="/projects">
                <div className={((last == 's') || (penult == 's')) ? "header-tab-active" : "header-tab"}>
                    Projects
                </div>
            </NavLink>
            <NavLink to="/teaching">
                <div className={((last == 'g') || (penpenult == '/')) ? "header-tab-active" : "header-tab"}>
                    Teaching
                </div>
            </NavLink>
            <NavLink to="/about">
                <div className={(last == 't') ? "header-tab-active" : "header-tab"}>
                    About
                </div>
            </NavLink>
        </div>
    </div>
    )
}

/*export default class Header extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        const url = document.URL;
        console.log(url.charAt(url.length - 1));
        return (
            <div className="header">
                <div className="header-title">
                    <NavLink
                        to="/"
                        activeClassName="header-title-active"
                    >Cameron Malloy</NavLink>
                </div>
                <div className="header-tabs">
                    <NavLink to="/projects">
                        <div className="header-tab">
                            Projects
                        </div>
                    </NavLink>
                    <div className="header-tab">
                        <NavLink
                            to="/teaching"
                            activeClassName="header-tab-active"
                        >Teaching</NavLink>
                    </div>
                    <div className="header-tab">
                        <NavLink
                            to="/about"
                            activeClassName="header-tab-active"
                        >About</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}*/

export default Header;