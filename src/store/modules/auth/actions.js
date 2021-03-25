export function signInRequest({ username, password }) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      username,
      password,
    },
  };
}

export function signInSuccess(token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {
      token,
    },
  };
}

export function signUpRequest(
  username,
  password,
  password2,
  email,
  first_name,
  last_name
) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { username, password, password2, email, first_name, last_name },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
