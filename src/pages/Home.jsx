import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CURRENT_PAGE } from '../utils/constants';
import { useStorePage } from '../zustand/useStorePage';

export const Home = () => {
  const { setPage } = useStorePage();

  useEffect(() => {
    setPage(CURRENT_PAGE.home);
  }, []);

  return (
    <>
      <h2>PAGE HOME</h2>

      <NavLink to="/classical">Classical Mafia</NavLink>
    </>
  );
};
