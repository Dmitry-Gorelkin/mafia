import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStorePage } from '../zustand/useStorePage';
import { CURRENT_PAGE } from '../utils/constants';

export const GameOfThrones = () => {
  const { setPage } = useStorePage();

  useEffect(() => {
    setPage(CURRENT_PAGE.gameOfThrones);
  }, []);

  return (
    <>
      <h2>Game Of Thrones</h2>

      <Link to="/">HOME</Link>

      <p>игры в разработке</p>
    </>
  );
};
