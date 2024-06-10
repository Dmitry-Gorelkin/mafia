import { Link } from 'react-router-dom';
import { CURRENT_PAGE } from '../../utils/constants';
import { useStoreGame } from '../../zustand/useStoreGame';
import { useStorePage } from '../../zustand/useStorePage';
import { InfoIcon, NavListBox } from './NavList.styled';

export const NavList = () => {
  const { page } = useStorePage();
  const { game } = useStoreGame();

  return (
    <NavListBox>
      {page !== CURRENT_PAGE.home && (
        <li>
          <Link to="/">Home</Link>
        </li>
      )}
      {page !== CURRENT_PAGE.home && <li>Новая игра</li>}
      {game && <li>Продолжить игру</li>}
      {page !== CURRENT_PAGE.home && <li>Правила игры</li>}
      <li>
        <InfoIcon />
      </li>
    </NavListBox>
  );
};
