import React from 'react';

import { Link } from 'react-router-dom';

import Loading from '~/components/Loader';

import { IoIosRadioButtonOn } from 'react-icons/io';
import { FiEdit } from 'react-icons/fi';

import { Container, Content, Image, Detail } from './style';

export default function Card(props) {
  const { store, loading, edit, link } = props;
  return (
    <Container>
      {!loading ? (
        <Content>
          <Image>
            {link || edit ? (
              <Link to={`/store/${store.slug}${edit ? '/edit' : ''}`}>
                <div>
                  <img src={store.avatar?.avatar} alt={store.name} />
                </div>
              </Link>
            ) : (
              <div>
                <img src={store.avatar?.avatar} alt={store.name} />
              </div>
            )}
          </Image>
          <Detail>
            <div className="detail">
              {link || edit ? (
                <Link to={`/store/${store.slug}${edit ? '/edit' : ''}`}>
                  <h2>{store.name}</h2>
                </Link>
              ) : (
                <h2>{store.name}</h2>
              )}
              {store.description && <p>{store.description}</p>}
              <span>
                {store.cnpj &&
                  store.cnpj?.replace(
                    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
                    '$1.$2.$3/$4-$5'
                  )}
              </span>
            </div>
            <div className="active">
              {store.active ? (
                <IoIosRadioButtonOn className="on" title="Ativa" />
              ) : (
                <IoIosRadioButtonOn className="off" title="Inativa" />
              )}
              {edit && (
                <Link to={`/store/${store.slug}/edit`}>
                  <div>
                    <FiEdit className="edit" />
                  </div>
                </Link>
              )}
            </div>
          </Detail>
        </Content>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

Card.defaultProps = {
  link: true,
  edit: false,
};
