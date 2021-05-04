import React, { useState, useRef } from 'react';
import api from '~/services/api';
import { Container } from './styles.js';
import { toast } from 'react-toastify';

export default function WallpaperInput({ slug, image }) {
  const [preview, setPreview] = useState(image);

  function handleChange(e) {
    const data = new FormData();

    data.append('wallpaper', e.target.files[0]);

    api
      .post(`/v1/store/${slug}/wallpaper/`, data)
      .then(({ data }) => {
        console.log(data);
        setPreview(data.wallpaper);
        toast.success('Wallpaper atualizado com sucesso');
      })
      .catch(error => {
        toast.error('Ocorreu um erro ao atualizar Wallpaper!');
        console.log(error);
      });
  }
  return (
    <Container preview={preview}>
      <label htmlFor="wallpaper">
        <div className="img" />

        <input
          type="file"
          id="wallpaper"
          name="wallpaper"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
