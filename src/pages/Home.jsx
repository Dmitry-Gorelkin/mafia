import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useStoreGame } from '../zustand/useStoreGame';
import { CURRENT_HELMET_PAGE } from '../utils/constants';

export const Home = () => {
  const { setGame } = useStoreGame();

  useEffect(() => {
    setGame(CURRENT_HELMET_PAGE.home);
  }, []);

  return (
    <>
      <h2>PAGE HOME</h2>

      <NavLink to="/classical">Classical Mafia</NavLink>
    </>
  );
};
