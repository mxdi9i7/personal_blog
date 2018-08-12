import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/Landing.css'

export default class Landing extends Component {
  render() {
    return (
      <div className="page">
        <Navbar />
        <div className="topContainer">

        </div>
        <Footer />
      </div>
    )
  }
}
