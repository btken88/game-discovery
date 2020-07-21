import React from "react";
import GameCard from './GameCard'
import './GameDisplay.css'

function GameDisplay({ games }) {
  const gameCards = games.map(game => {
    return <GameCard game={game} />
  })

  return (
    <div className="game-card-display">
      {gameCards}
    </div>
  )
}

export default GameDisplay;