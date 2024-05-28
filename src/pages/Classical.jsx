import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useStorePage } from '../zustand/useStorePage';
import { CURRENT_HELMET_PAGE } from '../utils/constants';

export const Classical = () => {
  const { setHelmetPage } = useStorePage();

  useEffect(() => {
    setHelmetPage(CURRENT_HELMET_PAGE.classical);
  }, []);

  return (
    <>
      <p>Play</p>

      <NavLink to="/">HOME</NavLink>
    </>
  );
};
