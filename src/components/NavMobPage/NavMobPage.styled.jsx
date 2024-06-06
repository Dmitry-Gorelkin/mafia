import styled from 'styled-components';
import { CiMenuBurger } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export const NavMobPageBox = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const NavMobPageLink = styled(Link)`
  color: ${p => p.theme.colors.accent};
  text-decoration: none;
`;

export const NavMobPageIconOpren = styled(CiMenuBurger)`
  width: 25px;
  height: 25px;

  cursor: pointer;

  @media screen and (min-width: 320px) {
    width: 7.7vw;
    height: 7.7vw;
  }
`;
