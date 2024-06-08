import { useLocation, useNavigate } from 'react-router-dom';
import { NavMobBox, NavMobIconOpren } from './NavMob.styled';

export const NavMob = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const openMenu = () => {
    navigate('/menu', { state: { from: location.pathname } });
  };

  return (
    <NavMobBox>
      <NavMobIconOpren onClick={openMenu} />
    </NavMobBox>
  );
};
