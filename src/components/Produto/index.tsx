import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { adicionarAoCarrinho } from '../../redux/features/carrinhoSlice'
import { favoritar } from '../../redux/features/favoritosSlice'
import { produtoEstaNosFavoritos } from '../../redux/features/favoritosSlice'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const handleAddAoCarrinho = () => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleFavoritar = () => {
    dispatch(favoritar(produto))
  }

  const estaNosFavoritos = useSelector(produtoEstaNosFavoritos(produto.id))

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAddAoCarrinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
