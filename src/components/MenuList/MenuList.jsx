// import { useEffect } from 'react';
import { CURRENT_PAGE } from '../../utils/constants';
import { useStoreGame } from '../../zustand/useStoreGame';
import { useStorePage } from '../../zustand/useStorePage';

export const MenuList = () => {
  const { page } = useStorePage();
  const { game } = useStoreGame();

  return (
    <>
      {page !== CURRENT_PAGE.home && <li>Home</li>}
      {page !== CURRENT_PAGE.home && <li>Новая игра</li>}
      {game && <li>Продолжить игру</li>}
      <li>Правила игры</li>
    </>
  );
};
