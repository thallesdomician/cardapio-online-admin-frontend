import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import history from '~/services/history';

import api from '~/services/api';
import Loading from '~/components/Loader';

import { AiOutlineReload } from 'react-icons/ai';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import Title from '~/components/Title';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome da Loja é obrigatório'),
  slug: Yup.string().required('Slug é obrigatório'),
  description: Yup.string(),
  cnpj: Yup.number().typeError('CNPJ é um número'),
});

export default function StoreEditProfile() {
  const { slug } = useParams();

  const [store, setStore] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [oldSlug, setOldSlug] = useState(slug);

  useEffect(() => {
    api
      .get(`/api/owner/store/${oldSlug}/`)
      .then(res => {
        const { data } = res;
        setStore(data);
        // use/access the results
      })
      .catch(errors => {
        toast.error(`Ocorreu um erro ao buscar loja: ${oldSlug}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleSubmit({ name, slug, cnpj, description }, actions) {
    setSaving(true);
    api
      .put(`/api/owner/store/${oldSlug}/`, { name, slug, cnpj, description })
      .then(({ data }) => {
        setStore(data);
        toast.success('Dados salvos com sucesso!');
        history.replace(`/store/${slug}/edit`);
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
  function handleSlug(data) {
    setStore({ ...store, slug: data.target.value });
    // setStore({ ...store, slug: data.target.value });
    // console.log(data.target.value);
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Title>
        Perfil: <small>{store.name}</small>
      </Title>
      <Formik
        initialValues={store}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Nome da Loja</label>
            <Field name="name" placeholder="Nome da Loja" />
            {errors.name && touched.name ? <span>{errors.name}</span> : null}
            <label htmlFor="cnpj">CNPJ</label>
            <Field name="cnpj" placeholder="CNPJ" />
            {errors.cnpj && touched.cnpj ? <span>{errors.cnpj}</span> : null}
            <label className="slug" htmlFor="slug">
              www.cardapiovirtual.online/
              <span className="show-slug">{store.slug}</span>
            </label>
            <Field name="slug" placeholder="slug" onKeyUp={handleSlug} />
            {errors.slug && touched.slug ? <span>{errors.slug}</span> : null}

            <label htmlFor="description">Descrição</label>
            <Field
              component="textarea"
              name="description"
              rows="5"
              cols="15"
              placeholder="Descrição"
            />
            {errors.description && touched.description ? (
              <span>{errors.description}</span>
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
