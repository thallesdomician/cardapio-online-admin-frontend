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

export const Container = styled.div``;
export const Content = styled.div`
  background-color: #fff;
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
    max-width: 500px;
    width: 100%;

    label {
      margin-top: 10px;
      font-weight: bold;

      .show-slug {
        font-size: 1.4em;
        color: #bf1010;
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
      color: #1b2956;
      margin: 5px 0 15px;
      border-bottom: 1px solid #1b2956;
      border-left: 1px solid #1b2956;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #bf1010;
      align-self: flex-end;
      margin: 0 0 15px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #f5c800;
      font-weight: bold;
      color: #202020;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: ${darken(0.08, '#f5c800')};
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
export const Tabs = styled.div`
  display: inline-flex;
  width: 100%;
  height: 100%;
  min-height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 4px 4px 0 0;
  span {
    text-align: center;
    flex: 1;
    height: 80%;
    &:hover {
      a {
        color: #1b2956;
      }
    }
    & + span {
      border-left: 1px solid #607d8b;
    }
    &.active {
      a {
        color: #1b2956;
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

      color: #607d8b;

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
