import { CURRENT_PAGE } from '../../utils/constants';
import { useStoreGame } from '../../zustand/useStoreGame';
import { useStorePage } from '../../zustand/useStorePage';
import { NavListBox } from './NavList.styled';

export const NavList = () => {
  const { page } = useStorePage();
  const { game } = useStoreGame();

  return (
    <NavListBox>
      {page !== CURRENT_PAGE.home && <li>Home</li>}
      {page !== CURRENT_PAGE.home && <li>Новая игра</li>}
      {game && <li>Продолжить игру</li>}
      <li>Правила игры</li>
    </NavListBox>
  );
};
