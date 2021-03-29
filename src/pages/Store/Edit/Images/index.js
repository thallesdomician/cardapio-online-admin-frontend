import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '~/services/api';
import Loading from '~/components/Loader';

import AvatarInput from './AvatarInput';
import WallpaperInput from './WallpaperInput';

import { Container, Content } from './styles.js';
import Title from '~/components/Title';

export default function StoreEditImages() {
  const { slug } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/api/owner/store/${slug}/`)
      .then(res => {
        setData({ ...res.data });
        // use/access the results
      })
      .catch(errors => {
        toast.error(`Ocorreu um erro ao buscar logo loja: ${slug}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Title>Imagens</Title>
      <Content>
        <WallpaperInput slug={data.slug} image={data.wallpaper?.wallpaper} />
        <AvatarInput slug={data.slug} image={data.avatar?.avatar} />
      </Content>
    </Container>
  );
}
