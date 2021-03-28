import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineReload } from 'react-icons/ai';
import logo from '~/assets/cardapio.svg';

import { signInRequest } from '~/store/modules/auth/actions';

import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

const schema = Yup.object().shape({
  username: Yup.string().required('Username é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

export default function SignIn(props) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const { to } = props.location?.state || {};
  console.tron.log('login', props);
  function handleSubmit({ username, password }) {
    dispatch(signInRequest({ username, password, to }));
  }
  return (
    <>
      <img src={logo} alt="Cardapio Virtual" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="username" placeholder="Username" />
        <Input name="password" type="password" placeholder="Senha" />

        <button disabled={loading ? 'disabled' : ''} type="submit">
          {loading ? 'Carregando' : 'Acessar'}{' '}
          {loading ? <AiOutlineReload /> : null}
        </button>

        <Link to="/register"> Criar Conta</Link>
      </Form>
    </>
  );
}
