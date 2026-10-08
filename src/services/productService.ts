import type { Product, ProductsResponse } from '../types/product'

const PRODUCTS_API_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
const PRODUCTS_LOCAL_URL = `${import.meta.env.BASE_URL}data/produtos.json`

async function requestProducts(url: string): Promise<Product[]> {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Erro ao buscar produtos (${response.status})`)
  }

  const data: ProductsResponse = await response.json()

  if (!data.success) {
    throw new Error('A API retornou um erro ao listar os produtos')
  }

  return data.products
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    return await requestProducts(PRODUCTS_API_URL)
  } catch {
    return requestProducts(PRODUCTS_LOCAL_URL)
  }
}
