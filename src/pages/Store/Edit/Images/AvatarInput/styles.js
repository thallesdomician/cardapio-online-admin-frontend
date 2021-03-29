import styled from 'styled-components';
import { device } from '~/styles/global';

export const Container = styled.div`
  align-self: center;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    img {
      height: 120px;
      width: 120px;
      @media ${device.laptop} {
        height: 150px;
        width: 150px;
      }
      border-radius: 50%;
      border: 5px solid #fff;
      box-shadow: 2px 2px 4px 1px rgb(0, 0, 0, 0.3);
    }
    input {
      display: none;
    }
  }
`;
