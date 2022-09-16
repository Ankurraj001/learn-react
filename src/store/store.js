import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import  {pokemonApi}  from './services/pockemon'
import counterReducer from './CounterSlice'
import displaySlice  from './DisplaySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    display: displaySlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch)