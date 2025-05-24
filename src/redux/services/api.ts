import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../../App'

export const produtosApi = createApi({
  reducerPath: 'produtosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

// useEffect(() => {
//     fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
//       .then((res) => res.json())
//       .then((res) => setProdutos(res))
//   }, [])

export const { useGetProdutosQuery } = produtosApi
