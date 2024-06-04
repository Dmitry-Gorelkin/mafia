import { useState } from 'react';
import { MenuList } from '../MenuList/MenuList';
import { MenuMobBox, MenuMobIconClose, MenuMobIconOpren, MenuMobWindow } from './MenuMob.styled';

export const MenuMob = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleDisplayMenu = () => {
    setDisplayMenu(state => !state);
  };

  return (
    <>
      {!displayMenu && (
        <MenuMobBox>
          <MenuMobIconOpren onClick={toggleDisplayMenu} />
        </MenuMobBox>
      )}

      {displayMenu && (
        <MenuMobWindow>
          <MenuMobIconClose onClick={toggleDisplayMenu} />
          <MenuList />
        </MenuMobWindow>
      )}
    </>
  );
};
