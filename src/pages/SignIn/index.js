import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { VscLoading } from 'react-icons/vsc';
import logo from '~/assets/cardapio.svg';

import { signInRequest } from '~/store/modules/auth/actions';

import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

const schema = Yup.object().shape({
  username: Yup.string().required('Username é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ username, password }) {
    dispatch(signInRequest({ username, password }));
  }
  return (
    <>
      <img src={logo} alt="Cardapio Virtual" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="username" placeholder="Username" />
        <Input name="password" type="password" placeholder="Senha" />

        <button disabled={loading ? 'opa' : ''} type="submit">
          {loading ? 'Carregando' : 'Acessar'} {loading ? <VscLoading /> : null}
        </button>

        <Link to="/register"> Criar Conta</Link>
      </Form>
    </>
  );
}
