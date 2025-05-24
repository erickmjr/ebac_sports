import { configureStore } from '@reduxjs/toolkit'

import { carrinhoReducer } from '../features/carrinhoSlice'
import { favoritosReducer } from '../features/favoritosSlice'
import { produtosApi } from '../services/api'
import produtosReducer from '../features/produtosSlice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [produtosApi.reducerPath]: produtosApi.reducer,
    produtos: produtosReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
