import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 150px;
  padding: 5px 10px;
  margin: 10px 5px;
  border-radius: 2px;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.5); */
  height: 100%;
  width: 100%;
`;
export const Image = styled.div`
  div {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    border: 4px solid #fff;
    padding: 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 130px;
      width: 130px;
    }
  }
`;
export const Detail = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  .detail {
    padding: 10px 15px;
    /* background-color: rgba(0, 0, 0, 0.5); */
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    h2 {
      font-family: 'Roboto', 'sans-serif';
      font-weight: 700;
      color: #000;
    }
    p {
      color: #6a6a6a;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    span {
      color: #aeaeae;
    }
  }
  .active {
    display: flex;
    align-items: center;
    flex-direction: column;

    justify-content: space-between;
    svg {
      top: 10px;
      right: 5px;
      height: 20px;
      width: 20px;

      &.on {
        color: green;
      }
      &.off {
        color: red;
      }
      &.edit {
        color: #550055;
      }
    }
  }
`;
