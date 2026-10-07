import { useEffect, useState } from 'react'
import ProductList from './components/ProductList/ProductList'
import ProductModal from './components/ProductModal/ProductModal'
import { fetchProducts } from './services/productService'
import type { Product } from './types/product'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selected, setSelected] = useState<Product | null>(null)

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((err: unknown) =>
        setError(err instanceof Error ? err.message : 'Erro desconhecido'),
      )
      .finally(() => setLoading(false))
  }, [])

  return (
    <main>
      <h1>Vitrine de produtos</h1>

      {loading && <p>Carregando produtos...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && (
        <ProductList products={products} onSelect={setSelected} />
      )}

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  )
}

export default App
