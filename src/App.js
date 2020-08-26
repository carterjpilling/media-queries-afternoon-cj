import React, { Component } from 'react'
import './reset.css'
import NavBar from './components/NavBar'
import './App.css'

export default class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }
  render() {
    return (
      <div>
        <NavBar />

      </div>
    )
  }
}