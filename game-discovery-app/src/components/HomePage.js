import React, { Component } from 'react'
import Hero from './Hero'
import GameDisplay from './GameDisplay'

export default class HomePage extends Component {
  state = {
    games: []
  }

  handleSearch = title => {
    console.log(title)
  }

  render() {
    return (
      <div className="home-page" >
        <Hero handleSearch={this.handleSearch} />
      </div>
    )
  }
}