import styled from 'styled-components';
import { CiMenuBurger, CiCircleRemove } from 'react-icons/ci';

export const MenuMobBox = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const MenuMobIconOpren = styled(CiMenuBurger)`
  width: 25px;
  height: 25px;

  cursor: pointer;

  @media screen and (min-width: 320px) {
    width: 7.7vw;
    height: 7.7vw;
  }
`;

export const MenuMobWindow = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;

  top: 0;
  left: 0;

  background-color: gray;

  gap: 15px;

  width: 100vw;
  height: 100vh;
`;

export const MenuMobIconClose = styled(CiCircleRemove)`
  position: absolute;

  top: 5vw;
  right: 5vw;

  width: 25px;
  height: 25px;

  cursor: pointer;

  z-index: 10;

  @media screen and (min-width: 320px) {
    width: 7.7vw;
    height: 7.7vw;
  }

  transform: 'translate(-50%, -50%)';
`;
