import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useStorePage } from '../zustand/useStorePage';
import { CURRENT_PAGE } from '../utils/constants';

export const NotFound = () => {
  const { setPage } = useStorePage;

  useEffect(() => {
    setPage(CURRENT_PAGE.home);
  }, []);

  return (
    <>
      <h2>NO PAGE</h2>
      <NavLink to="/">HOME</NavLink>
    </>
  );
};
