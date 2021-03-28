import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import history from '~/services/history';

import api from '~/services/api';
import Loading from '~/components/Loader';

import { AiOutlineReload } from 'react-icons/ai';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome da Loja é obrigatório'),
  slug: Yup.string().required('Slug é obrigatório'),
  description: Yup.string(),
  cnpj: Yup.number(),
});

export default function StoreEditProfile() {
  const { slug } = useParams();

  const [store, setStore] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newSlug, setNewSlug] = useState('');

  useEffect(() => {
    api
      .get(`/api/owner/store/${slug}/`)
      .then(res => {
        const { data } = res;
        setStore(data);
        setNewSlug(data.slug);
        // use/access the results
      })
      .catch(errors => {
        toast.error(`Ocorreu um erro ao buscar loja: ${slug}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleSubmit({ name, slug, cnpj, description }, oldSlug) {
    setSaving(true);
    api
      .put(`/api/owner/store/${oldSlug}/`, { name, slug, cnpj, description })
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
  function handleSlug(data) {
    setNewSlug(data.target.value);
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <Form
      initialData={store}
      schema={schema}
      onSubmit={data => handleSubmit(data, slug)}
    >
      <label htmlFor="name">Nome da Loja</label>
      <Input name="name" placeholder="Nome da Loja" />
      <label htmlFor="cnpj">CNPJ</label>
      <Input name="cnpj" placeholder="CNPJ" />
      <label className="slug" htmlFor="slug">
        www.cardapiovirtual.online/
        <span className="show-slug">{newSlug}</span>
      </label>
      <Input name="slug" placeholder="slug" onChange={handleSlug} />
      <label htmlFor="description">Descrição</label>
      <Input
        multiline
        name="description"
        rows="5"
        cols="15"
        placeholder="Descrição"
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
}
