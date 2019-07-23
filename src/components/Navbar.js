import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  render() {
    const hamburgerClassList = [
      "hamburger",
      "hamburger--emphatic",
      this.state.showMenu ? "is-active" : ""
    ];
    return (
      <div className="navbarContainer">
        <div className="logoContainer">Peter空间</div>
        <div className="linksContainer">
          <Link to="/">首页</Link>
          <Link to="/about">关于Peter</Link>
          <Link to="/projects">好玩的项目</Link>
          <Link to="/blog">我的博客</Link>
          <Link to="/contact">联系Peter</Link>
        </div>
        <div
          onClick={() => this.setState({ showMenu: !this.state.showMenu })}
          className={hamburgerClassList.join(" ")}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </div>
        {this.state.showMenu ? (
          <div className="menu">
            <Link to="/">首页</Link>
            <Link to="/about">关于Peter</Link>
            <Link to="/projects">好玩的项目</Link>
            <Link to="/blog">我的博客</Link>
            <Link to="/contact">联系Peter</Link>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Navbar;
