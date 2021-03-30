import React from 'react';

// import InputMask from '~/components/InputMask';
// import Input from './components/Input';

import { IoLogoWhatsapp } from 'react-icons/io';

import { Container } from './styles';

export default function PhoneBlock({ name }) {
  console.log(name);
  return (
    <Container>
      <InputMask
        name="ddd"
        className="ddd"
        placeholder="(  )"
        mask="(99)"
        maskChar="_"
      />
      <InputMask
        className="number"
        name="number"
        placeholder="x xxxx xxxx"
        mask="9 9999 9999"
        maskChar="_"
      />
      <label htmlFor={`${name}.main`}>
        <Input
          id={`${name}.main`}
          className="main"
          type="checkbox"
          name="main"
          placeholder="Whatsapp"
        />
        <IoLogoWhatsapp className="whatsapp" />
      </label>
    </Container>
  );
}
