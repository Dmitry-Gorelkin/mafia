import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStoreGame = create(
  persist(
    set => ({
      game: false,
      setStartGame: () => set({ game: true }),
      setStopGame: () => set({ game: false }),
    }),
    {
      name: 'my-game', // Укажите имя ключа в Local Storage
    }
  )
);
