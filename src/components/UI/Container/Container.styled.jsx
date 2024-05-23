import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  margin: 0px auto;

  padding-left: 5vw;
  padding-right: 5vw;

  @media screen and (min-width: 768px) {
    width: 768px;

    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;

    padding-left: 100px;
    padding-right: 100px;
  }
`;
