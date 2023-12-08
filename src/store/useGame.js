import { create } from "zustand";

export default create((set) => ({
  currentScore: 0,
  increaseScore: () => set((state) => ({ currentScore: state.currentScore + 1 })),
}));
