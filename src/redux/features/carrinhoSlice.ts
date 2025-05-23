import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface CarrinhoState {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const estaNoCarrinho = state.itens.find((produto) => {
        return produto.id === action.payload.id
      })
      if (!estaNoCarrinho) {
        state.itens.push(action.payload)
      } else {
        alert('O produto selecionado já está no carrinho.')
      }
    }
  }
})

export default carrinhoSlice

export const carrinhoReducer = carrinhoSlice.reducer

export const { adicionarAoCarrinho } = carrinhoSlice.actions
