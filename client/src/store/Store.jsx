// store.js
import { configureStore } from '@reduxjs/toolkit';
import { Api } from './api';

const Store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

export default Store;
