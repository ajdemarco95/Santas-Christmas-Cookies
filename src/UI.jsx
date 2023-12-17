import { useEffect, useRef } from "react";
import useGame from "./store/useGame";
import { addEffect } from "@react-three/fiber";

function UI() {
  const currentScore = useGame((state) => state.currentScore);

  const time = useRef();

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState();

      // if (state) {
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
            const formattedMins = mins.toString().padStart(2, '0');
            const formattedSecs = secs.toString().padStart(2, '0');
            const textString = `${formattedMins}:${formattedSecs}`;
            time.current.textContent = textString
          }  
        }
      // }
    });
    return () => {
      unsubscribeEffect;
    };
  }, []);

  return (
    <>
      <div className="UI-container">
        <div className="UI">
          <div className="top-row">
            <div className="time-remaining">
              <div className="timer-icon">⏱️</div>
              <div ref={time}> {/* Time Imperatively added here */}</div>
             
            </div>
            <div className="cookies-remaining">
              Cookies Found: {currentScore} / 5
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UI;
