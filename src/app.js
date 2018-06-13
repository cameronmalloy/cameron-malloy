import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Header from './components/Header';
import Home from './components/Home/Home.js';
import Project from './components/Projects/Project';
import Teaching from './components/Teaching/Teaching';
import About from './components/About/About';
import Project1Deliverable from './components/Projects/ProjectPdfs/Project1Deliverable';
import Project2Deliverable from './components/Projects/ProjectPdfs/Project2Deliverable';
import Footer from './components/Footer';

const HomePage = () => <Home />
const ProjectPage = (props) => <Project location={props.location} />
const TeachingPage = (props) => <Teaching location={props.location}/>
const AboutPage = () => <About />
const Project1Page = () => <Project1Deliverable />
const Project2Page = () => <Project2Deliverable />

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go home</Link>
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/projects" component={ProjectPage} exact={true} />
                <Route path="/teaching" component={TeachingPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/projects1" component={Project1Page} exact={true} />
                <Route path="/projects2" component={Project2Page} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));