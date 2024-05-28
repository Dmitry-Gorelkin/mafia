import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStoreGame = create(
  persist(
    set => ({
      game: '',
      setGame: e => set({ game: e }),
    }),
    {
      name: 'my-game', // Укажите имя ключа в Local Storage
    }
  )
);
