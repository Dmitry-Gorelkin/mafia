import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CURRENT_HELMET_PAGE } from '../utils/constants';

export const useStorePage = create(
  persist(
    set => ({
      helmetPage: CURRENT_HELMET_PAGE.home,
      setHelmetPage: e => set({ helmetPage: e }),
    }),
    {
      name: 'page', // Укажите имя ключа в Local Storage
    }
  )
);
