import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  input {
    border: none;
    border-bottom: none;
    border-left: none;
    margin: none;
  }
  .ddd {
    height: 50px;
    border-radius: 4px;
    background-color: rgba(27, 41, 86, 0.8);
    color: #fff;
    font-weight: 500;
    font-size: 1.1rem;
    width: 50px;
    padding: 0;
    text-align: center;
    &::placeholder {
      color: #fff;
    }
  }
  .number {
    height: 50px;
    width: 150px;
    margin-left: 5px;
    border-radius: 4px;
    background-color: rgba(27, 41, 86, 0.8);
    color: #fff;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0;
    text-align: center;
    &::placeholder {
      color: #fff;
    }
    margin-right: 5px;
  }

  label {
    display: block;
    position: relative;

    border-radius: 2px;

    margin-top: 0;
    margin-left: 10px;
    height: 50px;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      top: 0;
      bottom: 0;
      left: 0;
      height: 30px;
      margin: 0 0;
      width: 30px;
      padding: 0;

      & + svg {
        position: absolute;
        top: 0;
        left: 0;
        height: 30px;
        width: 30px;
        color: #888;
      }

      &:checked + svg {
        color: #25d366;
      }

      &:hover + svg {
        color: #075e54;
      }
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
