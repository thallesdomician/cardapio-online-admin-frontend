import styled, { keyframes } from 'styled-components';
import { device } from '~/styles/global';

import { darken } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
`;
export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 10px 15px;
  flex-direction: column;

  width: 100%;
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;

    label {
      align-self: flex-start;
      margin-top: 10px;
      font-weight: 600;
      color: #000;
      .show-slug {
        font-size: 1.2em;
        color: #a4279f;
      }
    }

    input,
    textarea {
      border: 0;
      min-height: 30px;
      width: 100%;
      line-height: 25px;
      font-size: 1.2em;
      padding: 0 15px;
      color: #000;
      margin: 5px 0 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      transition: border-bottom linear 200ms;
      &:focus {
        border-bottom: 2px solid rgba(100, 33, 156, 0.6);
      }

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #bf1010;
      align-self: flex-start;
      margin: 0 0 15px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background-color: #f5c800;
      font-weight: bold;
      color: #202020;
      width: 50%;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: ${darken(0.08, '#f5c800')};
      }

      &:disabled {
        background: #dedede;
        cursor: wait;
      }
      svg {
        animation: ${rotate} 2s linear infinite;
        margin-left: 5px;
      }
    }
  }
`;

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 15px;
  a {
    svg {
      height: 25px;
      width: 25px;
    }
  }
`;
export const Tabs = styled.div`
  display: inline-flex;
  width: 100%;
  height: 100%;
  min-height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  border-radius: 4px 4px 0 0;
  span {
    text-align: center;
    flex: 1;
    height: 80%;
    &:hover {
      a {
        color: #550055;
      }
    }
    & + span {
      border-left: 1px solid #d2d2d2;
    }
    &.active {
      a {
        color: #330033;
        strong {
          font-weight: bold;
        }
      }
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      color: #a4a4a4;

      @media ${device.tablet} {
        flex-direction: row;
      }
      svg {
        height: 20px;
        width: 20px;
      }

      strong {
        font-weight: 500;
        font-size: 0.8em;
        margin-top: 5px;
        @media ${device.tablet} {
          font-size: 1.1em;
          margin-left: 10px;
        }
      }
    }
  }
`;
