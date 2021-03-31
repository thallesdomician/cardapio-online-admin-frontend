import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BsFillPlusSquareFill } from 'react-icons/bs';

import api from '~/services/api';
import Loading from '~/components/Loader';
import PhoneBlock from './PhoneBlock';

import { AiOutlineReload } from 'react-icons/ai';
import { IoMdRemoveCircle, IoMdAddCircle } from 'react-icons/io';

import { Container, Content, BlockField } from './styles';

// import { Form, Scope } from '@unform/core';

import { Formik, FieldArray, Form } from 'formik';
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
        .min(9, 'No mínimo ${min} dígitos'),
      main: Yup.boolean(),
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
      .get(`/api/owner/store/${slug}/`)
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
      .post(`/api/owner/store/${slug}/phones/`, { phones: phones })
      .then(({ data }) => {
        setStore(data);
        toast.success('Dados salvos com sucesso!');
        history.replace(`/store/${slug}/edit`);
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
      phones: [...store.phones, { ddd: null, number: null, main: false }],
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
  return (
    <Container>
      <Content>
        <Title>Telefones</Title>
        <button onClick={addPhone}>
          <IoMdAddCircle />
        </button>
      </Content>

      <Formik initialValues={store} onSubmit={handleSubmit}>
        {({ values, errors, touched, handleReset }) => {
          return (
            <Form>
              <FieldArray
                name="phones"
                render={({ insert, remove, push }) => {
                  return store.phones && store.phones.length > 0
                    ? store.phones.map((item, index) => {
                        return (
                          <BlockField className="block-fied" key={index}>
                            <PhoneBlock name={`phones[${index}]`} />
                            <button onClick={() => removePhone(index)}>
                              <IoMdRemoveCircle />
                            </button>
                          </BlockField>
                        );
                      })
                    : null;
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
