import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  align-self: flex-start;
`;
export const Content = styled.div`
  flex-direction: row;
  display: flex;
  button {
    background-color: #fff;
    border: none;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 25px;
      height: 25px;
      color: #1b2956;
    }
  }
`;
export const BlockField = styled.div`
  &.block-fied {
    display: flex;
    flex-direction: row;

    button {
      background-color: #fff;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0;
      svg {
        animation: none;
        width: 25px;
        height: 25px;
        margin-left: 0;
        margin-bottom: 5px;
        color: #bf1010;
      }
      &:hover,
      &:active {
        background-color: #fff;
      }
    }
  }
`;
