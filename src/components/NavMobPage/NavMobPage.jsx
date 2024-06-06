import { useLocation } from 'react-router-dom';
import { NavMobPageBox, NavMobPageLink, NavMobPageIconOpren } from './NavMobPage.styled';
import { useRef } from 'react';

export const NavMobPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location);

  // console.log('first', backLinkHref.current);
  console.log('two', location);

  return (
    <NavMobPageBox>
      {/* <NavMobPageLink to={{ pathname: '/menu', state: { from: location.pathname } }}> */}
      <NavMobPageLink
        to={{
          pathname: '/menu',
          state: { from: 'Page1' },
        }}
      >
        <NavMobPageIconOpren />
      </NavMobPageLink>
    </NavMobPageBox>
  );
};
