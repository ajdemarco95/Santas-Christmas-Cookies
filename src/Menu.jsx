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
          <div className="">⭐️</div>
          <div className="">🎄🦮🎅🎄</div>
          <img className="title-img" src="./svg/title.svg" alt="" />
          {/* <div className="menu-title"><s>Santa's</s> Lilly's Christmas Cookies</div> */}
          <div className="menu-detail">🍪Help Santa find his Christmas cookies!🍪</div>
          <div className="menu-detail">...without eating them!!!</div>
          <div className="menu-options mx-auto">
            <div onClick={handlePlay} className="menu-row btn">Play Game</div>
            <div onClick={handleHighScores} className="menu-row btn" >High Scores</div>
            <div className="menu-row btn">Settings</div>
          </div>
        </div>
      </div>
    );
  
  }
}

export default Menu;
