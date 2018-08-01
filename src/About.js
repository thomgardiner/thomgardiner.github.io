import React, { Component, Fragment } from 'react';
import './App.css';
import './About.css';

let skillStyle = {
    fontWeight: "bold",
    // backgroundColor: 'green'
  }
  
  let skills = {
  
  }

class About extends Component {

    render(){
        return(
            <Fragment>
            <div class="row">
            <div class="intro">Hello, I'm <span id="thomas">Thomas</span>.</div>
          </div>
          <div class="row">
            <div class="tagline"> <span id="fullstack"> Full Stack Developer </span> | <span id="designer"> Designer </span> | <span id="musician"> Musician </span> | <span id="human"> Human </span> </div>
          </div>
          <div class="row">
            <div class="icons-social">
              <a target="_blank" href="https://github.com/thomgardiner"> <i class="fab fa-github"></i> </a>
              <a target="_blank" href="https://www.linkedin.com/in/thomas-gardiner-a824699"> <i class="fab fa-linkedin"></i></a>
              <a target="_blank" href="https://stackoverflow.com/users/10166761/thomgardiner?tab=profile"> <i class="fab fa-stack-overflow"></i></a>
              <a target="_blank" href="mailto:thomgardiner@gmail.com"> <i class="far fa-envelope"></i> </a>
            </div>
          </div>
          <div class="row">
            <div class="about"> My name is <span id="thomasg"> Thomas Gardiner</span>. I'm a Full Stack Developer with a background in, and eye for, art and design. I like to <span id="build" >build stuff</span> and learn new things. I make music in my free time and love to travel. Let's build something cool, together! I have experience in: </div>
            <div class="row">
            <div class="about-skills"><span style={skillStyle}> Skills and Languages:</span> <p style={skills}> <span id="javascript"> Javascript </span> | <span id="node">Node </span> | <span id="react"> React </span> |<span id="mongo"> MongoDB </span> | <span id="mysql"> MySQL </span> | <span id="html"> HTML </span> | <span id="css"> CSS </span> | Responsive Design | 3D Modeling | Motion Graphics </p> </div>
            <div class="about-skills"><span style={skillStyle}> Software:</span> <p style={skills}> 3DS Max, Maya, After Effects, Photoshop, Office, Jira </p> </div>
            </div>
          </div>
          </Fragment>
        )
    }

}

export default About;