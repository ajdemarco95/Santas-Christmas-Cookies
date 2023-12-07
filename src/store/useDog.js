import { create } from "zustand";

export default create((set) => ({
  dogActiveAnim: 39,
  status: "resting",
  dogRun: () => set((state) => ({ dogActiveAnim: 76 })),
  dogRunLeft: () => set((state) => ({ dogActiveAnim: 78 })),
  dogRunRight: () => set((state) => ({ dogActiveAnim: 80 })),
  dogWalkBack: () => set((state) => ({ dogActiveAnim: 119 })),
  dogIdle: () => set((state) => ({ dogActiveAnim: 40 })),
  dogSit: () => set((state) => ({ dogActiveAnim: 83 })),
}));


  /*
  39 - Idle
  40 - Idle Looking
  51 - Jump
  57 - Flying
  59 - Laying Wagging
  61 - Laying Sleep
  66 - Laying Active
  72 - Pick Up
  73 - Pick Up Idle
  75 - Put Down
  76 - Run Forward
  78 - Run Left
  80 - Run Right
  83 - Sitting
  84 - Sitting Looking
  94 - Flying
  105 - Trot
  107 - Trot Left
  109 - Trot Right
  119 - Walk Back
  122 - Walk Forward
  124 - Walk Left
  126 - Walk Right
  */