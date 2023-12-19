import { create } from "zustand";

export default create((set) => ({
  currentScore: 0,
  totalCookies: 1,
  startTime: 0,
  endTime: 0,
  phase: "ready",
  increaseScore: () =>
    set((state) => {
      if ((state.currentScore + 1) === state.totalCookies) {
        state.end();
      }
     return ({ currentScore: state.currentScore + 1 });
    }),
  start: () => {
    set((state) => {
      if (state.phase === "ready") {
        return { phase: "playing", startTime: Date.now() };
      }
      return {};
    });
  },
  restart: () => {
    set((state) => {
      if (state.phase === "playing" || state.phase === "ended")
        return { phase: "ready", currentScore: 0 };
    });
    return {};
  },
  end: () => {
    set((state) => {
      if (state.phase === "playing") {
        return { phase: "ended", endTime: Date.now(), currentScore: 0 };
      }
      return {};
    });
  },
}));
