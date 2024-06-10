import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NavMobBox, NavMobIconOpren } from './NavMob.styled';
import { useStorePage } from '../../zustand/useStorePage';
import { CURRENT_PAGE } from '../../utils/constants';
import { InfoIcon } from '../UI/InfoIcon/InfoIcon.styled';

export const NavMob = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { page } = useStorePage();

  const openMenu = () => {
    navigate('/menu', { state: { from: location.pathname } });
  };

  return (
    <NavMobBox>
      {page !== CURRENT_PAGE.home && <NavMobIconOpren onClick={openMenu} />}
      {page === CURRENT_PAGE.home && (
        <Link to="/info">
          <InfoIcon />
        </Link>
      )}
    </NavMobBox>
  );
};
