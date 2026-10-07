import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/formatPrice'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <li className="product-card">
      <button type="button" onClick={() => onSelect(product)}>
        <img src={product.photo} alt={product.productName} loading="lazy" />
        <h3>{product.descriptionShort}</h3>
        <p className="product-card__price">{formatPrice(product.price)}</p>
      </button>
    </li>
  )
}

export default ProductCard
