import React from 'react';
import { Link } from 'react-router-dom';

import api from '~/services/api';

export default function Dashboard() {
  api
    .get('api/profile/user/')
    .then(result => {
      console.tron.log(result);
    })
    .catch(err => {
      console.tron.log(err);
    });
  return (
    <div>
      Dashboard <Link to="/">Home</Link>
    </div>
  );
}
