import React, { useRef } from 'react';

import { Field } from 'formik';

import { IoLogoWhatsapp } from 'react-icons/io';

import { Container } from './styles';

export default function PhoneBlock(props) {
  const { name } = props;
  console.log('pros', props);
  const inputNumber = useRef(null);
  return (
    <Container>
      <label htmlFor={`${name}.whatsapp`}>
        <Field
          name={`${name}.whatsapp`}
          type="checkbox"
          placeholder="Whatsapp"
        />
        <IoLogoWhatsapp className="whatsapp" />
      </label>
      <Field
        name={`${name}.ddd`}
        placeholder="(  )"
        className="ddd"
        maxLength={2}
        onKeyUp={val => {
          if (val.target.value.length == val.target.maxLength) {
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
