import React, { Component } from 'react';
import Modal from './Modal'

export default class GameCard extends Component {
  state = {
    modal: false
  }

  handleClick = event => {
    const newModal = !this.state.modal
    this.setState({ modal: newModal })
  }

  render() {
    const { game } = this.props

    return (
      <>
        <div onClick={this.handleClick} className="game-card">
          <img src={game.images.small} alt={game.name} />
          <h2>{game.name}</h2>
          <div className="ages-players">
            <p>Players: {game.min_players}-{game.max_players}</p>
            <p>Ages {game.min_age} and up.</p>
          </div>
        </div>
        {this.state.modal ? <Modal game={game} handleClick={this.handleClick} /> : null}
      </>
    )
  }
}