import { create } from "zustand";

export default create((set) => ({
  dogActiveAnim: 39,
  dogRun: () => set((state) => ({ dogActiveAnim: 76 })),
  dogRunLeft: () => set((state) => ({ dogActiveAnim: 78 })),
  dogRunRight: () => set((state) => ({ dogActiveAnim: 80 })),
  dogIdle: () => set((state) => ({ dogActiveAnim: 40 })),
  dogSit: () => set((state) => ({ dogActiveAnim: 83 })),
}));
