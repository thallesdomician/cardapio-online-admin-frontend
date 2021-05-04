import styled from 'styled-components';

import { device } from '~/styles/global';

import background from '~/assets/background.svg';

export const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
  min-width: 350px;
  background-color: #330033;
  background-image: url(${background});
  background-attachment: fixed;
  position: relative;
  display: flex;
  @media ${device.tablet} {
    position: initial;
    height: initial;
    width: initial;
  }
`;

export const Container = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
export const Content = styled.div`
  height: 100%;
  width: 100%;
  min-width: 320px;
  max-width: 960px;
  border-radius: 2px;
  padding: 10px 15px;
  margin: 15px 0;
  align-self: center;
`;
