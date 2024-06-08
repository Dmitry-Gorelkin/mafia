import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CiCircleRemove } from 'react-icons/ci';

export const MenuMobBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  position: absolute;

  top: 0;
  left: 0;

  background-color: ${p => p.theme.colors.gray};
`;

export const MenuClose = styled(Link)`
  position: absolute;

  top: 5vw;
  right: 5vw;

  color: ${p => p.theme.colors.accent};
  text-decoration: none;
`;

export const MenuCloseIcon = styled(CiCircleRemove)`
  width: 25px;
  height: 25px;

  cursor: pointer;

  @media screen and (min-width: 320px) {
    width: 8vw;
    height: 8vw;
  }
`;
