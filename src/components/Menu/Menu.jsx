import { useLocation } from 'react-router-dom';
import { NavList } from '../NavList/NavList';
import { MenuBox, MenuClosBtn, MenuCloseIcon } from './Menu.styled';
import { useRef } from 'react';

export const Menu = ({ back }) => {
  const location = useLocation();
  // const backLinkHref = useRef(location.state?.from);
  const backLinkHref = useRef(location.state?.from ?? '/');
  const lastLocationRef = useRef(location.pathname);

  // useEffect(() => {
  //   const handleBackButton = () => {
  //     if (lastLocationRef.current.pathname !== location.pathname) {
  //       close();
  //     }
  //   };

  //   handleBackButton();
  // }, [location]);

  // console.log(lastLocationRef);
  // console.log(lastLocationRef.current);
  console.log(location);

  return (
    <MenuBox>
      <MenuClosBtn to={backLinkHref.current}>
        <MenuCloseIcon />
      </MenuClosBtn>
      <NavList />
    </MenuBox>
  );
};
