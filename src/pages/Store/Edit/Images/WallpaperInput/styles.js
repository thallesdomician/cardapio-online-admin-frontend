import styled from 'styled-components';
import { device } from '~/styles/global';

export const Container = styled.div`
  align-self: center;
  width: 100%;
  label {
    width: 100%;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
      .img {
        box-shadow: 0px 3px 7px 4px rgb(0, 0, 0, 0.3);
      }
    }
    .img {
      background: url(${props => props.preview}) no-repeat center center;
      background-size: cover;
      height: 150px;
      border-radius: 4px;

      @media ${device.laptop} {
        height: 200px;
      }
      width: 100%;
      &:hover {
        opacity: 0.7;
      }
    }
    input {
      display: none;
    }
  }
`;
