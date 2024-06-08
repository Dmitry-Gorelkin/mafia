import styled from 'styled-components';

export const NavListBox = styled.ul`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 20px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1200px) {
  }
`;
