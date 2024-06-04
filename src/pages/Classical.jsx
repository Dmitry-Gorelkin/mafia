import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useStorePage } from '../zustand/useStorePage';
import { CURRENT_PAGE } from '../utils/constants';
import { useStoreGame } from '../zustand/useStoreGame';

export const Classical = () => {
  const { setPage } = useStorePage();
  const { setStartGame, setStopGame } = useStoreGame();

  useEffect(() => {
    setPage(CURRENT_PAGE.classical);
  }, []);

  return (
    <>
      <p>Play</p>

      <NavLink to="/">HOME</NavLink>

      <button type="button" onClick={setStartGame}>
        начать игру
      </button>
      <button type="button" onClick={setStopGame}>
        Завершить игру
      </button>
    </>
  );
};
