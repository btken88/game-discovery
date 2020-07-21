import React, { Component } from 'react'
import "./Hero.css";

export default class Hero extends Component {
  state = {
    title: ""
  }

  handleChange = event => {
    this.setState({ title: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.title)
  }

  render() {
    return (
      <div className="hero">
        <h2>Game Discovery</h2>
        <p>Take a risk on something new!</p>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="title" placeholder="Game Name" />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
}