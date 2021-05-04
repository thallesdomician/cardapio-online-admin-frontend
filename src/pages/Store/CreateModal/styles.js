import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  button {
    margin: 5px 0 0;
    height: 44px;
    padding: 10px;
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
  }
`;
export const Content = styled.div`
  /* display: flex;
  width: 100%; */
`;

export const CloseSidebar = styled.div`
  position: absolute;

  right: 15px;
  top: 15px;
  cursor: pointer;
  svg {
    height: 25px;
    width: 25px;
  }
`;

export const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(3px)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '500px',
    width: '90%',
  },
};
