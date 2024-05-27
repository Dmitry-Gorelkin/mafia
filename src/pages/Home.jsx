import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useStoreGame } from '../zustand/useStore';

export const Home = () => {
  const { setGame } = useStoreGame();

  useEffect(() => {
    setGame('Mafia');
  }, []);

  return (
    <>
      <h2>PAGE HOME</h2>

      <NavLink to="/classical">Classical Mafia</NavLink>
    </>
  );
};
