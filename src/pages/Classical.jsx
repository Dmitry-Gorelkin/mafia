import { useEffect } from 'react';
import { useStoreGame } from '../zustand/useStore';
import { NavLink } from 'react-router-dom';

export const Classical = () => {
  const { game, setGame } = useStoreGame();

  useEffect(() => {
    setGame('Classical');
  }, []);

  return (
    <>
      <p>Play {game}</p>

      <NavLink to="/">HOME</NavLink>
    </>
  );
};
