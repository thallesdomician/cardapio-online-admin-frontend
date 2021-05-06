import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ContentTitle = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
`;
export const Content = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  & > div {
    width: 50%;
    display: inline-block;
    & + div {
      padding: 0 10px;
    }
  }
`;
export const BlockTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const IconAdd = styled.div`
  background-color: #fff;
  border: none;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
    width: 25px;
    height: 25px;
    color: #550055;
  }
`;
export const IconRemove = styled.div`
  background-color: #fff;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  svg {
    cursor: pointer;
    animation: none;
    width: 25px;
    height: 25px;
    margin-left: 0;
    margin-bottom: 5px;
    color: #bf1010;
  }
`;
