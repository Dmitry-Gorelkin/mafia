import styled from 'styled-components';
import { CiCircleQuestion } from 'react-icons/ci';

export const InfoIcon = styled(CiCircleQuestion)`
  width: 25px;
  height: 25px;

  @media screen and (min-width: 320px) {
    width: 7.7vw;
    height: 7.7vw;
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 1200px) {
    width: 50px;
    height: 50px;
  }
`;
