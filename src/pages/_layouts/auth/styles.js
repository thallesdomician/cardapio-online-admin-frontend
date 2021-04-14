import styled, { keyframes } from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  background: #90259e;
  background: linear-gradient(90deg, #64219c, #a4279f);


  background: #90259e;
  background: linear-gradient(45deg, #64219c, #a4279f);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 330px;
  text-align: center;
  img {
    height: 100px;

    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fff;
      align-self: flex-start;
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

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 1.1rem;
      font-weight: bold;
      opacity: 0.6;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
