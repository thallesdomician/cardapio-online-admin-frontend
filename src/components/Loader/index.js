import React from 'react';

import { AiOutlineReload } from 'react-icons/ai';
import { Container, Content } from './styles';

export default function Loading() {
  return (
    <Container>
      <Content>
        <AiOutlineReload />
      </Content>
    </Container>
  );
}
