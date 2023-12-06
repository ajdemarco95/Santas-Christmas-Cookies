import { create } from "zustand";

export default create((set) => ({
  dogActiveAnim: 39,
  dogRun: () => set((state) => ({ dogActiveAnim: 76 })),
  dogSit: () => set((state) => ({ dogActiveAnim: 83 })),
}));
