import { useEffect, useState } from 'react'
import CategoryMenu from './components/CategoryMenu/CategoryMenu'
import BrandSection from './components/BrandSection/BrandSection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PartnerBanners from './components/PartnerBanners/PartnerBanners'
import ProductModal from './components/ProductModal/ProductModal'
import ProductSection from './components/ProductSection/ProductSection'
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
    <>
      <Header />
      <Hero />
      <CategoryMenu />

      <main>
        {loading && <p>Carregando produtos...</p>}
        {error && <p role="alert">{error}</p>}

        {!loading && !error && (
          <>
            <ProductSection
              id="produtos"
              products={products}
              onSelect={setSelected}
              showTabs
            />
            <PartnerBanners />
            <ProductSection products={products} onSelect={setSelected} />
            <PartnerBanners />
            <BrandSection />
            <ProductSection products={products} onSelect={setSelected} />
          </>
        )}

        {selected && (
          <ProductModal product={selected} onClose={() => setSelected(null)} />
        )}
      </main>

      <Footer />
    </>
  )
}

export default App
