import type { Product } from '../../types/product'
import ProductCard from '../ProductCard/ProductCard'

interface ProductListProps {
  products: Product[]
  onSelect: (product: Product) => void
}

function ProductList({ products, onSelect }: ProductListProps) {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.productName}
          product={product}
          onSelect={onSelect}
        />
      ))}
    </ul>
  )
}

export default ProductList
