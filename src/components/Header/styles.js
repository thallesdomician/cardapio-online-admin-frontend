import styled from 'styled-components';
import { device } from '~/styles/global';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 70px;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.2);
  @media ${device.laptop} {
    box-shadow: none;
  }
  padding: 5px 30px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.laptop} {
    justify-content: flex-end;
  }
  nav {
    justify-content: center;

    display: flex;
    @media ${device.laptop} {
      display: none;
    }

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
        color: #64219c;
        margin-left: 10px;
        display: none;
        @media ${device.laptop} {
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
  transition: background-color 0.2s;
  &:hover {
    background-color: rgba(27, 41, 86, 0.3);
  }
  @media ${device.laptop} {
    display: none;
  }

  &:active {
    background-color: #64219c;

    svg {
      color: #fff;
    }
  }

  svg {
    color: #000;
    height: 20px;
    width: 20px;
    transition: color 0.5s;
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
