import styled from 'styled-components';
import { device } from '~/styles/global';

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  display: ${props => (props.active ? 'block' : 'none')};

  @media ${device.laptop} {
    position: initial;
    height: initial;
    width: initial;
    display: block;
  }
`;

export const Content = styled.div`
  min-height: 100%;
  background-color: #fff;
  width: 300px;
  position: absolute;
  box-shadow: 2px 2px 4px 1px rgb(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media ${device.laptop} {
    position: initial;
  }

  nav {
    justify-content: center;
    align-items: center;

    display: flex;
    height: 70px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    width: 80%;

    img {
      height: 45px;
    }
  }

  aside {
    margin-top: 30px;
    width: 80%;
    display: flex;

    ul {
      li {
        margin: 20px 0;
        padding-top: 10px;

        a {
          font-family: Roboto, sans-serif;
          font-weight: bold;
          color: #607d8b;
          font-size: 1.1rem;
          padding: 5px 10px;

          border-left: 2px solid transparent;
          transition: border-left 0.4s;
          &.active,
          &:hover {
            border-left: 2px solid #607d8b;
            color: #1b2956;
          }
        }
      }
    }
  }
`;

export const CloseSidebar = styled.div`
  position: absolute;

  right: 15px;
  top: 15px;
  cursor: pointer;
  svg {
    height: 25px;
    width: 25px;
  }
  @media ${device.laptop} {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: relative;
  height: 100%;
  width: ${props => (props.active ? 'calc(100% - 300px)' : '0')};
  float: right;
  background-color: rgb(0, 0, 0, 0.3);
  display: ${props => (props.active ? 'block' : 'none')};
  backdrop-filter: blur(2px);
  @media ${device.laptop} {
    display: none;
  }
`;
