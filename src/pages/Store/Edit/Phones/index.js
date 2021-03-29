import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BsFillPlusSquareFill } from 'react-icons/bs';

import api from '~/services/api';
import Loading from '~/components/Loader';
import PhoneBlock from './PhoneBlock';

import { AiOutlineReload } from 'react-icons/ai';

import { Container } from './styles';

import { Form, Scope, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Title from '~/components/Title';

const schema = Yup.object().shape({
  phones: Yup.array().of(
    Yup.object().shape({
      ddd: Yup.string()
        .matches(/^[1-9]/, {
          message: 'Precisa ser numérico',
          excludeEmptyString: true,
        })
        .required('DDD obrigatório')
        .min(2, 'No mínimo 2 dígitos')
        .max(2, 'No máximo 2 dígitos'),
      number: Yup.string()
        .matches(/^[1-9]{8}/, {
          message: 'Precisa ser numérico',
          excludeEmptyString: true,
        })
        .required('Número Obrigatório')
        .min(8, 'No mínimo ${min} dígitos')
        .max(9, 'No máximo ${max} dígitos'),
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
        console.log(data);
      })
      .catch(errors => {
        toast.error(`Ocorreu um erro ao buscar loja: ${slug}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleSubmit(data) {
    console.log(data);
    // setSaving(true);
    // api
    //   .put(`/api/owner/store/${oldSlug}/`, { name, slug, cnpj, description })
    //   .then(({ data }) => {
    //     setStore(data);
    //     toast.success('Dados salvos com sucesso!');
    //     history.replace(`/store/${slug}/edit`);
    //   })
    //   .catch(error => {
    //     toast.error('Ocorreu um erro ao salvar os dados.');
    //   })
    //   .finally(() => {
    //     setSaving(false);
    //   });
  }
  if (loading) {
    return <Loading />;
  }
  console.log('store', store);

  function addPhone() {
    setStore({
      ...store,
      phones: [...store.phones, { ddd: '', number: '', main: false }],
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
      <Title>Telefones</Title>
      <button onClick={addPhone}>
        Novo <BsFillPlusSquareFill />
      </button>
      <Form initialData={store} schema={schema} onSubmit={handleSubmit}>
        {store.phones.map((item, index) => {
          return (
            <Scope path={`phones[${index}]`} key={index.toString()}>
              <PhoneBlock />
              <button onClick={() => removePhone(index)}>Remover</button>
            </Scope>
          );
        })}
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
    </Container>
  );
}
