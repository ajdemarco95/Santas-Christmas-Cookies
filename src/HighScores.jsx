import React from 'react'

function HighScores({setAppState}) {
  return (
    <div className="menu-screen">
    <div className="menu-menu">
      <div className="">High Scores</div>
      <div className="menu-options">
        <div className="score">dubiousdogue - 1min 52</div>
        <div className="score">perilouspenguin - 2min 38</div>
        <div className="score">strawbie - 3min 38</div>
      </div>
    </div>
    <div onClick={() => {setAppState("menu")}} className="menu-row return-btn">Back</div>
  </div>

  )
}

export default HighScores