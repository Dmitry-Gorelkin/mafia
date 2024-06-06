import styled from 'styled-components';
import { CiCircleRemove } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export const MenuBox = styled.ul`
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

  z-index: 10;
`;

export const MenuClosBtn = styled(Link)`
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
