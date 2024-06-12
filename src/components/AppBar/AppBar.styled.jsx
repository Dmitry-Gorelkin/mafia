import styled from 'styled-components';

export const AppBarContainer = styled.div`
  width: 100%;

  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

export const AppBarBox = styled.div`
  height: 10vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
  }
`;
