import React, { useRef } from 'react';

import { Field } from 'formik';

import { IoLogoWhatsapp } from 'react-icons/io';

import { Container } from './styles';

export default function PhoneBlock({ index, name }) {
  const inputNumber = useRef(null);
  const inputDDD = useRef(null);
  return (
    <Container>
      <label htmlFor={`${name}.main`}>
        <Field name={`${name}.main`} type="checkbox" placeholder="Whatsapp" />
        <IoLogoWhatsapp className="whatsapp" />
      </label>
      <Field
        name={`${name}.ddd`}
        placeholder="(  )"
        className="ddd "
        maxLength={2}
        innerRef={inputDDD}
        onKeyUp={val => {
          console.log('é maior', val.target.value, val.target.maxLength);
          if (val.target.value.length == val.target.maxLength) {
            console.log(inputNumber);
            inputNumber.current.focus();
          }
        }}
      />
      <Field
        name={`${name}.number`}
        placeholder="x xxxx xxxx"
        className="number"
        maxLength="9"
        innerRef={inputNumber}
      />
    </Container>
  );
}
