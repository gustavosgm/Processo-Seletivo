import type { Product, ProductsResponse } from '../types/product'

const PRODUCTS_URL = `${import.meta.env.BASE_URL}data/produtos.json`

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL)

  if (!response.ok) {
    throw new Error(`Erro ao buscar produtos (${response.status})`)
  }

  const data: ProductsResponse = await response.json()

  if (!data.success) {
    throw new Error('A API retornou um erro ao listar os produtos')
  }

  return data.products
}
