import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/formatPrice'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <li className="product-card">
      <div className="product-card__button">
        <div className="product-card__image">
          <img src={product.photo} alt={product.productName} loading="lazy" />
        </div>
        <p className="product-card__name">{product.productName}</p>
        <p className="product-card__price">{formatPrice(product.price)}</p>
        <p className="product-card__installments">
          ou 2x de {formatPrice(Math.round(product.price / 2))} sem juros
        </p>
        <p className="product-card__shipping">Frete grátis</p>
        <button
          type="button"
          className="product-card__buy"
          onClick={() => onSelect(product)}
        >
          COMPRAR
        </button>
      </div>
    </li>
  )
}

export default ProductCard
