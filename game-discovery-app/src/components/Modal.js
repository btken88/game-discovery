import React from 'react'

export default function Modal({ game, handleClick }) {
  return (
    <div className="modal" onClick={handleClick}>
      <div className="full-details">
        <img src={game.images.medium} alt={game.name} />
        <h2>{game.name}</h2>
        <p>{game.description_preview}</p>
        <p>Players: {game.min_players}-{game.max_players}</p>
        <p>Ages {game.min_age} and up.</p>
        <p>${game.price}</p>
        <p>This game takes between {game.min_playtime} and {game.max_playtime} minutes to play.</p>
      </div>
    </div>
  )
}
