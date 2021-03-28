import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FaMapMarkerAlt } from 'react-icons/fa';

import api from '~/services/api';

import { Address, Container, Content } from './styles.js';

import Card from './../Card';

export default function StoreDetail() {
  const { slug } = useParams();

  const [store, setStore] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/api/owner/store/${slug}/`)
      .then(res => {
        const { data } = res;
        setStore(data);
        // use/access the results
      })
      .catch(errors => {
        toast.error(`Ocorreu um erro ao buscar loja: ${slug}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Content>
        <Card store={store} loading={loading} edit={true} link={false} />
        {!loading && (
          <Address>
            <Content>
              <strong className="title">
                <FaMapMarkerAlt /> Endereço:
              </strong>
              {store.address ? (
                <>
                  <div className="place">
                    {store.address?.place}
                    {store.address?.number && `, ${store.address?.number}`}
                    {store.address?.complement &&
                      `, ${store.address?.complement}`}
                    {store.address?.district && ` - ${store.address?.district}`}
                  </div>
                  <div className="city">
                    {store.address?.city && `${store.address?.city.name}`}
                    {store.address?.city?.state &&
                      `/${store.address?.city.state.uf}`}
                  </div>
                  <div className="cep">
                    {store.address?.cep && `${store.address?.cep}`}
                  </div>
                </>
              ) : (
                <span className="place">Não cadastrado</span>
              )}
            </Content>
          </Address>
        )}
      </Content>
    </Container>
  );
}
