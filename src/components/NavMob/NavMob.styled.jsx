import styled from 'styled-components';
import { CiMenuBurger } from 'react-icons/ci';

export const NavMobBox = styled.div`
  display: block;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const NavMobIconOpren = styled(CiMenuBurger)`
  width: 25px;
  height: 25px;

  color: ${p => p.theme.colors.btn};

  @media screen and (min-width: 320px) {
    width: 7.7vw;
    height: 7.7vw;
  }

  :hover,
  :focus {
    color: ${p => p.theme.colors.bthHover};
  }
`;
