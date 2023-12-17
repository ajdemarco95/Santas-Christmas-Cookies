import HighScores from "./HighScores"

function Menu({appState, setAppState}) {

  const handlePlay = () => {
    setAppState("running")
  }

  const handleHighScores = () => {
    setAppState("highscores")
  }

  if (appState === "highscores") {
    return (
      <HighScores setAppState={setAppState}/>
    )
  } else {
    return (
      <div className="menu-screen">
        <div className="menu-menu">
          <div className="menu-title">Lilly's Christmas Cookies</div>
          <div className="menu-options">
            <div onClick={handlePlay} className="menu-row">Play Game</div>
            <div onClick={handleHighScores} className="menu-row">High Scores</div>
            <div className="menu-row">Settings</div>
          </div>
        </div>
      </div>
    );
  
  }
}

export default Menu;
