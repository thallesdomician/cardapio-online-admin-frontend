import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  .ddd {
    width: 100%;
    max-width: 150px;

    text-align: center;
  }
  .number {
    width: 100%;
    max-width: 250px;
    margin-left: 15px;
    text-align: center;
  }

  label {
    display: block;
    width: 100%;
    max-width: 50px;
    height: 100%;
    min-height: 30px;

    position: relative;
    align-self: center;

    border-radius: 2px;

    margin-top: 0;
    margin-left: 10px;

    input {
      z-index: 1;
      position: absolute;
      opacity: 0;
      cursor: pointer;
      top: 0;
      bottom: 0;
      left: 0;
      margin: 0 0;
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
        color: rgba(37, 211, 102, 0.6);
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

export const BlockField = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .phone-error {
    align-self: center;
  }
`;
