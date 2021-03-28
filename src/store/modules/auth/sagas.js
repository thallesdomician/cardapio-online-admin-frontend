import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { username, password, to } = payload;

    const response = yield call(api.post, 'auth/login/', {
      username,
      password,
    });

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(token));

    history.push(to ?? '/dashboard');
  } catch (error) {
    console.tron.log('erro login', error);
    toast.error('Falha na autenticação. Verifique seus dados!');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const {
      username,
      password,
      password2,
      email,
      first_name,
      last_name,
    } = payload;

    yield call(api.post, 'auth/register/', {
      username,
      password,
      password2,
      email,
      first_name,
      last_name,
    });
    toast.error('Falha no cadastro. Verifique seus dados!');

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro. Verifique seus dados!');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
