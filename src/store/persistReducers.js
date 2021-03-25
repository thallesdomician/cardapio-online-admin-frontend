import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistentReducer = persistReducer(
    {
      key: 'root-cardapio-admin',
      storage,
      version: 0,
      whitelist: ['auth', 'user'],
    },
    reducers
  );
  return persistentReducer;
};
