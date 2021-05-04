import styled from 'styled-components';
import { device } from '~/styles/global';

import wallpapper from '~/assets/default-wallpapper.svg'

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
      ${
        props => {
          if(props.preview) {
            return `background: url(${props.preview}) no-repeat center center;
            background-size: cover;`

          }
          return `background: url(${wallpapper});`
        }
      }
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
