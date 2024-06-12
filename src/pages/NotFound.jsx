import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useStorePage } from '../zustand/useStorePage';
import { CURRENT_PAGE } from '../utils/constants';
import { Title } from '../components/UI/Title/Title';

export const NotFound = () => {
  const { setPage } = useStorePage();

  useEffect(() => {
    setPage(CURRENT_PAGE.home);
  }, []);

  return (
    <>
      <Title>NO PAGE</Title>
      <NavLink to="/">HOME</NavLink>
    </>
  );
};
