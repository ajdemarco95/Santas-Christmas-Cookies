import React from 'react'
import useGame from './store/useGame'

function UI() {

  const currentScore = useGame((state) => state.currentScore)

  return (
    <div className='UI'>
      <div className="">Current Score: {currentScore}</div>
    </div>
  )
}

export default UI