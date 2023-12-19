import { useEffect, useRef, useState } from "react";
import useGame from "./store/useGame";
import { addEffect } from "@react-three/fiber";
import useSound from 'use-sound'

function UI(props) {
  const currentScore = useGame((state) => state.currentScore);
  const phase = useGame((state) => state.phase);
  const startTime = useGame((state) => state.startTime);
  const endTime = useGame((state) => state.endTime);
  const restart = useGame((state) => state.restart);


  const [play] = useSound('./audio/win.mp3')

  const time = useRef();

  const [exploring, setExploring] = useState(false)

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState();

      let elapsedTime = 0;
      if (state.phase === "playing") {
        elapsedTime = Date.now() - state.startTime;
      } else if (state.phase === "ended") {
        elapsedTime = state.endTime - state.startTime;
      } 

      elapsedTime /= 1000;
      elapsedTime = elapsedTime.toFixed(2);

      if (time.current) {
        if (elapsedTime < 60) {
          time.current.textContent = elapsedTime;
        }

        if (elapsedTime > 60) {
          const mins = Math.floor(elapsedTime / 60);
          const secs = Math.floor(elapsedTime % 60);
          const formattedMins = mins.toString().padStart(2, "0");
          const formattedSecs = secs.toString().padStart(2, "0");
          const textString = `${formattedMins}:${formattedSecs}`;
          time.current.textContent = textString;
        }
      }
    });
    return () => {
      unsubscribeEffect;
    };
  }, []);

  function formatMilliseconds(ms) {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    // Padding with leading zero if necessary
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    return minutes + ":" + seconds;
  }

  if (phase === "ended" && !exploring) {
    play()
    return (
      <>
        <div className="UI-container">
          <div className="UI">
            <div className="top-row">
              <div className="time-remaining">
                <div className="timer-icon">⏱️</div>
                <div ref={time}> {/* Time Imperatively added here */}</div>
              </div>
              <div className="cookies-remaining">Complete!</div>
            </div>
            <div className="end-modal">
              <div className="end-modal-title">🎄Mission Complete!🎄</div>
              <div className="end-modal-detail">
                You found all Santa's cookies! You didn't eat them, right...?
              </div>
              <div className="">
                Final Score: {formatMilliseconds(endTime - startTime)}
              </div>
              <div className="end-modal-submit-score mx-auto">
                <input
                  className="submit-score-name-input"
                  type="text"
                  name=""
                  placeholder="Enter Name..."
                />
                <div className="submit-score-btn btn">Submit</div>
              </div>
              <div className="end-modal-btns">
                <div
                  onClick={() => {
                    restart();
                    props.setAppState("menu");
                  }}
                  className="end-modal-btn btn btn-1"
                >
                  Main Menu
                </div>
                <div onClick={() => {setExploring(true)}} className="end-modal-btn btn">Explore</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="UI-container">
          <div className="UI">
            <div className="top-row">
              <div className="time-remaining in-game-shadow">
                <div className="timer-icon">⏱️</div>
                <div ref={time}> {/* Time Imperatively added here */}</div>
              </div>
              <div className="cookies-remaining in-game-shadow">
                Cookies Found: {currentScore} / 5
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UI;
