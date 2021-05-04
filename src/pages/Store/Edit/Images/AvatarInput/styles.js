import styled from 'styled-components';
import { device } from '~/styles/global';

export const Container = styled.div`
  align-self: center;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.5;
      img {
        box-shadow: 0px 3px 5px 2px rgb(0, 0, 0, 0.3);
      }
    }
    img {
      height: 130px;
      width: 130px;
      @media ${device.laptop} {
        height: 150px;
        width: 150px;
      }
      padding: 5px;
      background-color: #fff;
      border-radius: 50%;
      border: 5px solid #fff;
      box-shadow: 2px 2px 4px 1px rgb(0, 0, 0, 0.3);
    }
    input {
      display: none;
    }
  }
`;
