import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); */
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const Address = styled.div`
  background-color: #fff;
  width: 100%;
  height: 120px;
  padding: 10px 10px;
  margin: 10px 5px;
  border-radius: 2px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  & div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    .title {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      font-weight: bold;
      svg {
        color: #607d8b;
        height: 20px;
        width: 20px;
        margin-right: 3px;
      }
    }

    .place {
      font-size: 1.1em;
      color: #5d5d5d;
    }

    .cep {
      font-size: 1.1.rem;
      font-weight: 700;
    }
  }
`;
