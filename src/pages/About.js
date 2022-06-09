import React, { Component } from 'react';
import "./About.css";
import sam from "../assets/sam.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={sam}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Samuel Iradukunda</div>
            <div className="brief_description">
              <p>My name is Samuel Iradukunda and I am a rising junior pursuing a Computer Science degree. Besides coding, I love to try different kinds of coffee and travel.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}