import { useState } from 'react';
import { Menu } from '../Menu/Menu';
import { NavMobBox, NavMobIconOpren } from './NavMob.styled';

export const NavMob = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleDisplayMenu = () => {
    setDisplayMenu(state => !state);
  };

  return (
    <>
      {!displayMenu && (
        <NavMobBox>
          <NavMobIconOpren onClick={toggleDisplayMenu} />
        </NavMobBox>
      )}

      {displayMenu && <Menu close={toggleDisplayMenu} />}
    </>
  );
};
