import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
`;
export const IconAdd = styled.div`
  background-color: #fff;
  border: none;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 25px;
    height: 25px;
    color: #550055;
  }
`;
