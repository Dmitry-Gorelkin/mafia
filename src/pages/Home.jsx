import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CURRENT_PAGE } from '../utils/constants';
import { useStorePage } from '../zustand/useStorePage';
import { useStoreGame } from '../zustand/useStoreGame';

export const Home = () => {
  const { setPage } = useStorePage();
  const { setNameGame } = useStoreGame();

  useEffect(() => {
    setPage(CURRENT_PAGE.home);
    setNameGame('');
  }, []);

  return (
    <>
      <h2>PAGE HOME</h2>

      <Link to="/classical">Classical Mafia</Link>

      <h3>Game 2</h3>
      <Link to="/game-of-thrones">Game Of Thrones</Link>

      <p>тест12</p>
    </>
  );
};
