import React from 'react';

import { Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function PhoneBlock() {
  return (
    <Container>
      <Input name="ddd" placeholder="DDD" maxlength="2" />
      <Input name="number" placeholder="Número" maxlength="9" />
      <Input type="checkbox" name="main" placeholder="Whatsapp" />
    </Container>
  );
}
