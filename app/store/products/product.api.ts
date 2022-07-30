import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from './product.types'

export const productApi = createApi({
	reducerPath: 'api/products',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
	endpoints: builder => ({
		getProducts: builder.query<IProduct[], number>({
			query: (limit = 5) => `products?limit=${limit}`
		})
	})
})

export const { useGetProductsQuery } = productApi
