import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component {
  constructor() {
    super()

    this.state = {
      display: false
    }
    this.handleSlide = this.handleSlide.bind(this)
  }

  handleSlide() {
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    console.log(this.state.display)
    return (
      <div className="background-img">
        <div className='navbar'>
          <h1 className='app-name'>Start Bootstrap</h1>
          <div className='navbar-icon' onClick={this.handleSlide}>Menu &#9776;</div>
          <div className="navbar-button-container">
            <button className="navbar-button">About</button>
            <button className="navbar-button">Projects</button>
            <button className="navbar-button">Contact</button>
          </div>
        </div>
        <div className={this.state.display ? 'dropdown' : 'hidden'}>
          <button className="navbar-button">Home</button>
          <button className="navbar-button">About</button>
          <button className="navbar-button">Contact</button>
        </div>
        <div className="text-container">
          <h1 className="grayscale-text">GRAYSCALE</h1>
          <p className="text-box">
            A free, responsive, one page Bootstrap theme<br />
          </p>
          <p className="text-box">
            created by Start Bootstrap
            </p>
          <button className="get-started-button">GET STARTED</button>
        </div>
      </div>
    )
  }
}