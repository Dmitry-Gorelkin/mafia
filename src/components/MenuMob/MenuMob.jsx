import { useState } from 'react';
import { MenuMobWindow } from '../MenuMobWindow/MenuMobWindow';
import { MenuMobBox, MenuMobIconOpren } from './MenuMob.styled';

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

      {displayMenu && <MenuMobWindow close={toggleDisplayMenu} />}
    </>
  );
};
