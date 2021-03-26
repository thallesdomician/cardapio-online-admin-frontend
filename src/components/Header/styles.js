import styled from 'styled-components';
import { device } from '~/styles/global';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 70px;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2);
  padding: 5px 30px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    justify-content: center;

    img {
      height: 45px;
    }
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;

      strong {
        color: #1b2956;
        margin-left: 10px;
        display: none;
        @media ${device.tablet} {
          display: block;
        }
      }
    }
  }
`;

export const ToggleMenu = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: rgba(27, 41, 86, 0.3);
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;

export const ProfileImage = styled.div`
  /* background-color: #fff; */
  box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 30%);
  border-radius: 50%;
  border: 2px solid #fafafa;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 35px;
    height: 35px;
  }
`;
