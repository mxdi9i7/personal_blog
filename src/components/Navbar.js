import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

class Navbar extends Component {
  render () {
    return (
      <div className="navbarContainer">
        <div className="logoContainer">
          Peter Space
        </div>
        <div className="linksContainer">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Past Projects</Link>
          <Link to="/blog">All blogs</Link>
          <Link to="/contact">Contact me</Link>
        </div>
      </div>
    )
  }
}

export default Navbar