import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useStoreGame } from '../zustand/useStoreGame';
import { CURRENT_HELMET_PAGE } from '../utils/constants';

export const NotFound = () => {
  const { setGame } = useStoreGame();

  useEffect(() => {
    setGame(CURRENT_HELMET_PAGE);
  }, []);

  return (
    <>
      <h2>NO PAGE</h2>
      <NavLink to="/">HOME</NavLink>
    </>
  );
};
