import React, { useState, useRef } from 'react';
import api from '~/services/api';
import { Container } from './styles.js';
import { toast } from 'react-toastify';

export default function AvatarInput({ slug, image }) {
  const [preview, setPreview] = useState(image);

  function handleChange(e) {
    const data = new FormData();

    data.append('avatar', e.target.files[0]);

    api
      .post(`/api/owner/store/${slug}/avatar/`, data)
      .then(({ data }) => {
        console.log(data);
        setPreview(data.avatar);
        toast.success('Avatar atualizado com sucesso');
      })
      .catch(error => {
        toast.error('Ocorreu um erro ao atualizar Avatar!');
        console.log(error);
      });
  }
  return (
    <Container>
      <label htmlFor="avatar">
        <img src={preview} alt="" />
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
