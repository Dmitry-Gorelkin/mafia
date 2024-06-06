import { useLocation } from 'react-router-dom';
import { MenuList } from '../MenuList/MenuList';
import { MenuMobIconClose, MenuMobWindowBox } from './MenuMobWindow.styled';
import { useEffect, useRef } from 'react';

export const MenuMobWindow = ({ close }) => {
  const location = useLocation();
  const lastLocationRef = useRef(location);

  useEffect(() => {
    const handleBackButton = () => {
      if (lastLocationRef.current.pathname !== location.pathname) {
        close();
      }
    };

    handleBackButton();
  }, [location]);

  return (
    <MenuMobWindowBox>
      <MenuMobIconClose onClick={close} />
      <MenuList />
    </MenuMobWindowBox>
  );
};
