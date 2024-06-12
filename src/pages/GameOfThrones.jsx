import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStorePage } from '../zustand/useStorePage';
import { CURRENT_PAGE } from '../utils/constants';
import { useStoreGame } from '../zustand/useStoreGame';
import { Title } from '../components/UI/Title/Title';

export const GameOfThrones = () => {
  const { setPage } = useStorePage();
  const { setNameGame } = useStoreGame();

  useEffect(() => {
    setPage(CURRENT_PAGE.gameOfThrones);
    setNameGame(CURRENT_PAGE.gameOfThrones);
  }, []);

  return (
    <>
      <Title>Game Of Thrones</Title>

      <Link to="/">HOME</Link>

      <p>Игра в разработке</p>
    </>
  );
};
