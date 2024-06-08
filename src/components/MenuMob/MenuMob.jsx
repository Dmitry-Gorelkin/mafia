import { useLocation } from 'react-router-dom';
import { NavList } from '../NavList/NavList';
import { MenuClose, MenuCloseIcon, MenuMobBox } from './MenuMob.styled';
import { useRef } from 'react';

export const MenuMob = () => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  return (
    <MenuMobBox>
      <MenuClose to={backLink.current}>
        <MenuCloseIcon />
      </MenuClose>
      <NavList />
    </MenuMobBox>
  );
};
