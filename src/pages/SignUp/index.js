import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/cardapio.svg';
import history from '~/services/history';

import api from '~/services/api';
import { toast } from 'react-toastify';

import { Formik, Field, Form } from 'formik';

import * as Yup from 'yup';

function equalTo(ref, msg) {
  return this.test({
    name: 'equalTo',
    exclusive: false,
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path,
    },
    test: function (value) {
      return value === this.resolve(ref);
    },
  });
}

Yup.addMethod(Yup.string, 'equalTo', equalTo);

const schema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'Precisa ter no mínimo 6 caracteres')
    .trim('Não pode conter quebras ou espaços')
    .required('Username é obrigatório'),
  first_name: Yup.string().required('Nome é obrigatório'),
  last_name: Yup.string().required('Sobrenome é obrigatório'),
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .matches(/[A-Z]/, {
      message: 'Precisa conter letras maiúsculas',
      excludeEmptyString: true,
    })
    .matches(/[a-z]/, {
      message: 'Precisa conter letras minúsculas',
      excludeEmptyString: true,
    })
    .matches(/[0-9]/, {
      message: 'Precisa conter números',
      excludeEmptyString: true,
    })
    .matches(/[@#$%^&+=_-]/, {
      message: 'Precisa conter caracteres especiais: @#$%^&+=_-',
      excludeEmptyString: true,
    })
    .min(8, 'Precisa ter no mínimo 8 caracteres')
    .required('Senha é obrigatória'),
  password2: Yup.string()
    .required('Repita a senha')
    .equalTo(Yup.ref('password'), 'As senhas precisam ser iguais'),
});

export default function SignUp() {
  //   const dispatch = useDispatch();

  function handleSubmit(
    { username, password, password2, email, first_name, last_name },
    actions
  ) {
    // dispatch(
    //   signUpRequest(username, password, password2, email, first_name, last_name)
    // );

    api
      .post('auth/register/', {
        username,
        password,
        password2,
        email,
        first_name,
        last_name,
      })
      .then(data => {
        console.log(data);
        toast.success('Usuário cadastrado com sucesso!');
        history.push('/');
      })
      .catch(error => {
        if (error.response) {
          const { data } = error.response;
          Object.keys(data).map(field => {
            actions.setFieldError(field, data[field]);
          });
        }
        toast.error('Falha no cadastro. Verifique seus dados!');
      });
  }

  return (
    <>
      <img src={logo} alt="Cardapio Virtual" />
      <Formik
        initialValues={{
          username: '',
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          password2: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="username" placeholder="Usuário" />
            {errors.username && touched.username ? (
              <span>{errors.username}</span>
            ) : null}
            <Field name="first_name" placeholder="Nome" />
            {errors.first_name && touched.first_name ? (
              <span>{errors.first_name}</span>
            ) : null}
            <Field name="last_name" placeholder="Sobrenome" />
            {errors.last_name && touched.last_name ? (
              <span>{errors.last_name}</span>
            ) : null}
            <Field type="email" name="email" placeholder="E-mail" />
            {errors.email && touched.email ? <span>{errors.email}</span> : null}
            <Field type="password" name="password" placeholder="Senha" />
            {errors.password && touched.password ? (
              <span>{errors.password}</span>
            ) : null}
            <Field
              type="password"
              name="password2"
              placeholder="Repita a senha"
            />

            <button type="submit">Criar Conta</button>

            <Link to="/"> Já tenho Login</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}
