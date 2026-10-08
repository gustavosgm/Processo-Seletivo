import type { Product } from '../../types/product'
import CategoryTabs from '../CategoryTabs/CategoryTabs'
import ProductCarousel from '../ProductCarousel/ProductCarousel'

interface ProductSectionProps {
  products: Product[]
  onSelect: (product: Product) => void
  showTabs?: boolean
  id?: string
}

function ProductSection({
  products,
  onSelect,
  showTabs = false,
  id,
}: ProductSectionProps) {
  return (
    <section className="product-section" id={id}>
      <header className="section-title">
        <h2>Produtos relacionados</h2>
      </header>

      {showTabs ? (
        <CategoryTabs />
      ) : (
        <a href="#produtos" className="product-section__more">
          Ver todos
        </a>
      )}

      <ProductCarousel products={products} onSelect={onSelect} />
    </section>
  )
}

export default ProductSection
