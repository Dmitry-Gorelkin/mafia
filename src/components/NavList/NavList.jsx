import { Link, useNavigate } from 'react-router-dom';
import { CURRENT_PAGE } from '../../utils/constants';
import { useStoreGame } from '../../zustand/useStoreGame';
import { useStorePage } from '../../zustand/useStorePage';
import { NavListBox } from './NavList.styled';
import { InfoIcon } from '../UI/InfoIcon/InfoIcon.styled';

export const NavList = () => {
  const navigate = useNavigate();
  const { page } = useStorePage();
  const { game, nameGame } = useStoreGame();

  const openRules = () => {
    switch (nameGame) {
      case CURRENT_PAGE.classical:
        return navigate('/rules', { state: { from: '/classical' } });
      case CURRENT_PAGE.gameOfThrones:
        return navigate('/rules', { state: { from: '/game-of-thrones' } });
      default:
        return navigate('/rules', { state: { from: '/' } });
    }
  };

  return (
    <NavListBox>
      {page !== CURRENT_PAGE.home && (
        <li>
          <Link to="/">Home</Link>
        </li>
      )}
      {nameGame && <li>Новая игра</li>}
      {game && <li>Продолжить игру</li>}
      {nameGame && <li onClick={openRules}>Правила игры</li>}
      {page === CURRENT_PAGE.home && (
        <li>
          <Link to="/info">
            <InfoIcon />
          </Link>
        </li>
      )}
    </NavListBox>
  );
};
