import styled from 'styled-components';
import { device } from '~/styles/global';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  @media ${device.laptop} {
    height: 350px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 210px;
  @media ${device.laptop} {
    height: 275px;
  }

  div {
    & + div {
      position: absolute;
      bottom: 0;
    }
  }
`;

export const Logo = styled.div``;