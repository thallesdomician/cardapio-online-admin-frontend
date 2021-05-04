import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';
import { toast } from 'react-toastify';

import api from '~/services/api';
import Loading from '~/components/Loader';

import { AiOutlineReload } from 'react-icons/ai';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import Title from '~/components/Title';

const schema = Yup.object().shape({
  cep: Yup.string()
    .min(8, 'Precisa ter 8 dígitos')
    .max(8, 'Precisa ter 8 dígitos')
    .required('CEP é obrigatório'),
  place: Yup.string()
    .max(100, 'No máximo 100 caracteres')
    .required('Logradouro/Rua é obrigatório'),
  number: Yup.string().required('Número é obrigatório'),
  complement: Yup.string(),
  district: Yup.string().required('Bairro/Região é obrigatório'),
  city: Yup.object().shape({
    name: Yup.string().required('Cidade é obrigatória'),
    state: Yup.object().shape({
      uf: Yup.string().min(2).max(2).required('UF é obrigatório'),
    }),
  }),
});

export default function StoreEditAddress() {
  const { slug } = useParams();
  const [store, setStore] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api
      .get(`/v1/store/${slug}/`)
      .then(({ data }) => {
        const {
          address: {
            cep = '',
            place = '',
            number = '',
            complement = '',
            district = '',
            city = {},
          },
        } = data;
        setStore({
          address: {
            cep,
            place,
            number,
            complement,
            district,
            city,
          },
        });
      })
      .catch(errors => {
        toast.error(`Ocorreu um erro ao buscar loja: ${slug}`);
        console.log(errors);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleSubmit(
    {
      cep,
      place,
      number,
      complement,
      district,
      city: {
        name,
        state: { uf },
      },
    },
    actions
  ) {
    setSaving(true);
    api
      .put(`/v1/store/${slug}/address/`, {
        address: {
          cep,
          place,
          number,
          complement,
          district,
          city: { name, state: { uf } },
        },
      })
      .then(({ data }) => {
        setStore(data);
        toast.success('Dados salvos com sucesso!');
      })
      .catch(error => {
        if (error.response) {
          const { data } = error.response;
          Object.keys(data).map(field => {
            actions.setFieldError(field, data[field]);
          });
        }
        toast.error('Ocorreu um erro ao salvar os dados.');
      })
      .finally(() => {
        setSaving(false);
      });
  }

  function handleCEP(data) {
    const { value } = data.target;
    axios
      .get(`//viacep.com.br/ws/${value}/json/`)
      .then(({ data }) => {
        console.log('viacep', data);
        setStore({
          ...store,
          address: {
            ...store.address,
            cep: value,
            place: data.logradouro,
            district: data.bairro,
            city: {
              ...store.address.city,
              name: data.localidade,
              state: { uf: data.uf },
            },
          },
        });
      })
      .catch(error => {
        toast.error(`Ocorreu um erro ao buscar o CEP: ${value}`);
      });
  }

  if (loading) {
    return <Loading />;
  }

  const { address } = store;
  console.log('address', address);
  return (
    <>
      <Title>Endereço</Title>
      <Formik
        enableReinitialize={true}
        initialValues={address}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="cep">CEP</label>
            <Field
              name="cep"
              placeholder="CEP"
              onKeyUp={!errors.cep ? handleCEP : null}
            />
            {errors.cep && touched.cep ? <span>{errors.cep}</span> : null}

            <label htmlFor="place">Logradouro/Rua</label>
            <Field name="place" placeholder="Logradouro/Rua" />
            {errors.place && touched.place ? <span>{errors.place}</span> : null}

            <label htmlFor="number">Número</label>
            <Field name="number" placeholder="Número" />
            {errors.number && touched.number ? (
              <span>{errors.number}</span>
            ) : null}

            <label htmlFor="complement">Complemento</label>
            <Field name="complement" placeholder="Complemento" />
            {errors.complement && touched.complement ? (
              <span>{errors.complement}</span>
            ) : null}

            <label htmlFor="district">Bairro</label>
            <Field name="district" placeholder="Bairro" />
            {errors.district && touched.district ? (
              <span>{errors.district}</span>
            ) : null}

            <label htmlFor="city.name">Cidade</label>
            <Field name="city.name" placeholder="Cidade" />
            {errors.city?.name && touched.city?.name ? (
              <span>{errors.city?.name}</span>
            ) : null}
            <label htmlFor="city.state.uf">UF</label>
            <Field name="city.state.uf" placeholder="UF" />
            {errors.city?.state?.uf && touched.city?.state?.uf ? (
              <span>{errors.city?.state?.uf}</span>
            ) : null}
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
        )}
      </Formik>
    </>
  );
}
