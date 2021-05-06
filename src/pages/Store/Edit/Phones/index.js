import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '~/services/api';
import Loading from '~/components/Loader';
import PhoneBlock from './PhoneBlock';

import { AiOutlineReload } from 'react-icons/ai';
import { IoMdRemoveCircle, IoMdAddCircle } from 'react-icons/io';

import { Container, Content, BlockField, IconAdd, IconRemove } from './styles';

// import { Form, Scope } from '@unform/core';

import { Formik, FieldArray, Form, getIn } from 'formik';
import * as Yup from 'yup';

import Title from '~/components/Title';

const schema = Yup.object().shape({
  phones: Yup.array().of(
    Yup.object().shape({
      ddd: Yup.string()
        .required('DDD obrigatório')
        .min(2, 'No mínimo 2 dígitos')
        .max(2, 'No máximo 2 dígitos'),
      number: Yup.string()
        .required('Número Obrigatório')
        .min(8, 'No mínimo ${min} dígitos')
        .max(9, 'No mínimo ${min} dígitos'),
    })
  ),
});

export default function StoreEditPhones() {
  const { slug } = useParams();

  const [store, setStore] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api
      .get(`/v1/store/${slug}/`)
      .then(res => {
        const { data } = res;
        setStore(data);
      })
      .catch(errors => {
        toast.error(`Ocorreu um erro ao buscar loja: ${slug}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleSubmit({ phones }) {
    api
      .put(`/v1/store/${slug}/phones/`, { phones: phones })
      .then(({ data }) => {
        setStore(data);
        toast.success('Dados salvos com sucesso!');
      })
      .catch(error => {
        toast.error('Ocorreu um erro ao salvar os dados.');
      })
      .finally(() => {
        setSaving(false);
      });
  }
  if (loading) {
    return <Loading />;
  }

  function addPhone() {
    setStore({
      ...store,
      phones: [...store.phones, { ddd: '', number: '', whatsapp: false }],
    });
  }
  function removePhone(index) {
    let phones = store.phones;
    phones.splice(index, 1);
    setStore({
      ...store,
      phones,
    });
  }

  const { phones } = store;
  return (
    <Container>
      <Formik
        initialValues={store}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ values, errors, touched, handleReset }) => {
          return (
            <Form className="form">
              <FieldArray
                name="days"
                render={arrayHelpers => {
                  return (
                    <>
                      <Content>
                        <Title>Telefones</Title>
                        <IconAdd
                          className="icon-add"
                          onClick={() =>
                            arrayHelpers.push({
                              ddd: '',
                              number: '',
                              whatsapp: false,
                            })
                          }
                        >
                          <IoMdAddCircle />
                        </IconAdd>
                      </Content>
                      {values.phones && values.phones.length > 0
                        ? values.phones.map((item, index) => {
                            return (
                              <BlockField className="block-fied" key={index}>
                                <PhoneBlock
                                  name={`phones.${index}`}
                                  errors={getIn(
                                    arrayHelpers.form.errors,
                                    `phones.${index}`
                                  )}
                                  touched={getIn(
                                    arrayHelpers.form.touched,
                                    `phones.${index}`
                                  )}
                                />
                                <IconRemove
                                  className="button-remove"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  <IoMdRemoveCircle />
                                </IconRemove>
                              </BlockField>
                            );
                          })
                        : null}
                    </>
                  );
                }}
              />
              <button disabled={saving ? 'disabled' : ''} type="submit">
                {saving ? (
                  <>
                    Salvando <AiOutlineReload />
                  </>
                ) : (
                  'Salvar'
                )}
              </button>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}
