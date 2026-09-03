import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type Store = {
  count: number
  inc: () => void
  dec: () => void
  reset: () => void
}

export const useCounterStore = create<Store>()(
  devtools((set, get) => ({
  count: 10,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => { 
     if( get().count === 0 ) return 
     set({ count: get().count - 1 });
  },
  reset: () => set(() => ({ count: 10 })),
}),
  {
    name: 'CounterStore',
  }
))