import React from 'react';

import { Container } from './styles';
export default function Title({ children }) {
  return (
    <Container>
      <h2>{children}</h2>
    </Container>
  );
}
