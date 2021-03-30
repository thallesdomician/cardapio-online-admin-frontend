import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import './config/ReactotronConfig';

import history from './services/history';
import '~/config/ReactotronConfig';

import Routes from '~/routes';

import { store, persistor } from './store';

import GlobalStyle from '~/styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <Helmet>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={5000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
