import { create } from "zustand";

export default create((set) => ({
  currentScore: 0,
  startTime: 0,
  endTime: 0,
  phase: "ready",
  increaseScore: () =>
    set((state) => ({ currentScore: state.currentScore + 1 })),
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
        return { phase: "ready" };
    });
    return {};
  },
  end: () => {
    set((state) => {
      if (state.phase === "playing") {
        return { phase: "ended", endTime: Date.now() };
      }
      return {};
    });
  },
}));
