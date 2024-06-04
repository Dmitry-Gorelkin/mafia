import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CURRENT_PAGE } from '../utils/constants';

export const useStorePage = create(
  persist(
    set => ({
      page: CURRENT_PAGE.home,
      setPage: e => set({ page: e }),
    }),
    {
      name: 'page', // Укажите имя ключа в Local Storage
    }
  )
);
