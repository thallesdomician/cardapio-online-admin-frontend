import React, { useRef } from 'react';

import { Field } from 'formik';

import { IoLogoWhatsapp } from 'react-icons/io';
import { getIn } from 'formik';
import { Container, BlockField } from './styles';

export default function PhoneBlock(props) {
  const { name, errors, touched } = props;
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
      <BlockField>
        <Field
          name={`${name}.ddd`}
          placeholder="(  )"
          className="ddd"
          maxLength={2}
          type="number"
          onKeyUp={val => {
            if (val.target.value.length == val.target.maxLength) {
              inputNumber.current.focus();
            }
          }}
        />
        {getIn(errors, 'ddd') && getIn(touched, 'ddd') ? (
          <span className="phone-error">{getIn(errors, 'ddd')}</span>
        ) : null}
      </BlockField>
      <BlockField>
        <Field
          name={`${name}.number`}
          placeholder="x xxxx xxxx"
          className="number"
          maxLength="9"
          type="number"
          innerRef={inputNumber}
        />
        {getIn(errors, 'number') && getIn(touched, 'number') ? (
          <span className="phone-error">{getIn(errors, 'number')}</span>
        ) : null}
      </BlockField>
    </Container>
  );
}
