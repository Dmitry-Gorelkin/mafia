import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStorePage } from '../zustand/useStorePage';
import { CURRENT_PAGE } from '../utils/constants';
import { useStoreGame } from '../zustand/useStoreGame';

export const GameOfThrones = () => {
  const { setPage } = useStorePage();
  const { setNameGame } = useStoreGame();

  useEffect(() => {
    setPage(CURRENT_PAGE.gameOfThrones);
    setNameGame(CURRENT_PAGE.gameOfThrones);
  }, []);

  return (
    <>
      <h2>Game Of Thrones</h2>

      <Link to="/">HOME</Link>

      <p>Игра в разработке</p>
    </>
  );
};
