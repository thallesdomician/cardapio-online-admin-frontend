import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import api from '~/services/api';
import { Container, Content } from './styles.js';

import Loader from '~/components/Loader';

import Card from './Card';

export default function Store() {
  const [storeList, setStoreList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/api/owner/store/')
      .then(({ data }) => {
        setStoreList(data.results);
      })
      .catch(err => {
        toast.error('Ocorreu um erro ao buscar lista Lojas');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Content>
        {storeList.map(store => {
          return <Card store={store} key={store.slug} />;
        })}
      </Content>
    </Container>
  );
}
