import { configureStore } from '@reduxjs/toolkit'
import { carrinhoReducer } from '../features/carrinhoSlice'
import { favoritosReducer } from '../features/favoritosSlice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
