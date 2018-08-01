import React, { Component, Fragment } from 'react';
import './App.css';
import './About.css';
import './Port.css';

class Portfolio extends Component {

    render(){
        return(
        <Fragment>
            <div class="row">
            <div class="project-intro">Here are some things I've built. Check my github for more!</div>
            </div>
            <div class="row">
                <div class="port-container">
                    <div class="port-item" id="1">
                        <p class="project-title"> Step Sequencer </p>
                        <p class="project-about">Create musical loops out of drum samples and synths!</p>
                        <p class="project-madewith"><span class="made-with">Made with:</span></p>
                        <p class="project-madewith-info">JS, React, Tone.js, Node.js</p>
                    </div>
                    <div class="port-item" id="2">
                        <p class="project-title" id="benkyo"> Benkyo! </p>
                        <p class="project-about">A full stack flashcard app where you can create and study decks!</p>
                        <p class="project-madewith"><span class="made-with">Made with:</span></p>
                        <p class="project-madewith-info">JS, JQuery, MongoDB, Node.js</p>
                    </div>
                    <div class="port-item" id="3">
                        <p class="project-title" id="filter-app"> Filter App </p>
                        <p class="project-about">Automatically places funny props on user submitted images!</p>
                        <p class="project-madewith"><span class="made-with">Made with:</span></p>
                        <p class="project-madewith-info">JS, JQuery, Node.js, Kairos Face Detection API</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="port-container-2">
                    <div class="port-item" id="4">
                        <p class="project-title" id="gif-app"> GIF Search App </p>
                        <p class="project-about">Search a library of GIFs with the GIPHY API! </p>
                        <p class="project-madewith"><span class="made-with">Made with:</span></p>
                        <p class="project-madewith-info">JS, JQuery, GIPHY API</p>
                    </div>
                    <div class="port-item" id="5">
                        <p class="project-title" id="quiz-app"> Quiz App </p>
                        <p class="project-about">A simple quiz app about a handful of country capitals.</p>
                        <p class="project-madewith"><span class="made-with">Made with:</span></p>
                        <p class="project-madewith-info">JS, JQuery</p>
                    </div>
                </div>
            </div>
        </Fragment>
        )
    }

}

export default Portfolio;