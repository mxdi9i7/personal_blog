import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
  }
  
  render () {
    const hamburgerClassList = [
      'hamburger',
      'hamburger--emphatic',
      this.state.showMenu ? 'is-active' : ''
    ]
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
        <div 
          onClick={() => this.setState({showMenu: !this.state.showMenu})}
          className={hamburgerClassList.join(' ')}>
           <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
        {
          this.state.showMenu ?
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Past Projects</Link>
            <Link to="/blog">All blogs</Link>
            <Link to="/contact">Contact me</Link>
          </div> : ''
        }
      </div>
    )
  }
}

export default Navbar