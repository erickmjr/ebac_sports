import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'
import { RootState } from '../app/store'

interface FavoritosState {
  produtosFavoritos: Produto[]
}

const initialState: FavoritosState = {
  produtosFavoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const estaFavoritado = state.produtosFavoritos.find((produto) => {
        return produto.id === action.payload.id
      })

      if (!estaFavoritado) {
        state.produtosFavoritos.push(action.payload)
      } else {
        state.produtosFavoritos = state.produtosFavoritos.filter(
          (produto) => produto.id !== action.payload.id
        )
      }
    }
  }
})

export const produtoEstaNosFavoritos =
  (produtoId: number) =>
  (state: RootState): boolean =>
    state.favoritos.produtosFavoritos.some(
      (produto) => produto.id === produtoId
    )

export default favoritosSlice

export const favoritosReducer = favoritosSlice.reducer

export const { favoritar } = favoritosSlice.actions
