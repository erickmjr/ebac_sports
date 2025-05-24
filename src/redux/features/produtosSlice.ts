import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface Produtos {
  itens: Produto[]
}

const initialState: Produtos = {
  itens: []
}

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    setProdutos: (state, action: PayloadAction<Produto[]>) => {
      state.itens = action.payload
    }
  }
})

export const { setProdutos } = produtosSlice.actions

export default produtosSlice.reducer
