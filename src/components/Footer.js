import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

class Footer extends Component {
  render () {
    return (
      <div className="footerContainer">
        <div className="footerContent">
          <div className="titleContainer">
            Subscribe to the mailing list
          </div>
          <div className="footerGrid">
            <div className="subsContainer">
              <p>
                If you're interested in receiving updates from my blog, leave your 
                email down below and you will be hearing from me!
              </p>
              <div className="inputContainer">
                <input placeholder="Your email address" type="text"/>
                <button>Submit</button>
              </div>
            </div>
            <div className="interestContainer">
              <p>Pick a category that you're interested in</p>
              <div className="blockContainer">
                <div className="block">Interest</div>
                <div className="block">Interest</div>
                <div className="block">Interest</div>
                <div className="block">Interest</div>
                <div className="block">Interest</div>
                <div className="block">Interest</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomBar">
          <div className="logoContainer">
          
          </div>
          <div className="linksContainer">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Past Projects</Link>
            <Link to="/blog">All blogs</Link>
            <Link to="/contact">Contact me</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer