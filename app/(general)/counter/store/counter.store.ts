import { create } from 'zustand'
import { devtools } from 'zustand/middleware';

type Store = {
  count: number
  inc: () => void,
  dec:() => void,
  reset: () => void
}

export const useCounterStore = create<Store>()(
  devtools(
    (set) => ({
      count: 10,
      inc: () => set((state) => ({ count: state.count + 1 })),
      dec: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set(() => ({ count: 10 })),
  }),
  {
    name: 'CounterStore',
  },
  ));
