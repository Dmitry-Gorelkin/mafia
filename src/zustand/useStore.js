import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore1 = create(
  persist(
    set => ({
      arrMaf: 0,
      setArrMaf: () => set(state => ({ arrMaf: state.arrMaf + 1 })),
      setClear: () => set({ arrMaf: 0 }),
    }),
    {
      name: 'my-games', // Укажите имя ключа в Local Storage
    }
  )
);
