import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineReload } from 'react-icons/ai';
import logo from '~/assets/cardapio.svg';

import { signInRequest } from '~/store/modules/auth/actions';
import { Formik, Field, Form } from 'formik';

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
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="username" placeholder="Username" />
            {errors.username && touched.username ? (
              <span>{errors.username}</span>
            ) : null}
            <Field name="password" type="password" placeholder="Senha" />
            {errors.password && touched.password ? (
              <span>{errors.password}</span>
            ) : null}
            <button disabled={loading ? 'disabled' : ''} type="submit">
              {loading ? 'Carregando' : 'Acessar'}{' '}
              {loading ? <AiOutlineReload /> : null}
            </button>

            <Link to="/register"> Criar Conta</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}
