import { useDispatch, useSelector } from 'react-redux'
import Produto from '../components/Produto'

import * as S from './styles'
import { setProdutos } from '../redux/features/produtosSlice'
import { useEffect } from 'react'
import { useGetProdutosQuery } from '../redux/services/api'
import { RootState } from '../redux/app/store'

const ProdutosComponent = () => {
  const dispatch = useDispatch()

  const { data } = useGetProdutosQuery()

  const produtos = useSelector((state: RootState) => state.produtos.itens)

  useEffect(() => {
    if (data) {
      dispatch(setProdutos(data))
    }
  }, [data, dispatch])
  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
