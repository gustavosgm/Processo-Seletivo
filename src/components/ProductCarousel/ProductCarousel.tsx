import { useRef } from 'react'
import type { Product } from '../../types/product'
import ProductCard from '../ProductCard/ProductCard'

interface ProductCarouselProps {
  products: Product[]
  onSelect: (product: Product) => void
}

function ProductCarousel({ products, onSelect }: ProductCarouselProps) {
  const listRef = useRef<HTMLUListElement>(null)

  const scroll = (direction: 1 | -1) => {
    const list = listRef.current
    if (!list) return
    list.scrollBy({ left: direction * list.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="product-carousel">
      <button
        type="button"
        className="product-carousel__arrow product-carousel__arrow--prev"
        aria-label="Produtos anteriores"
        onClick={() => scroll(-1)}
      >
        ‹
      </button>
      <ul className="product-carousel__list" ref={listRef}>
        {products.map((product) => (
          <ProductCard
            key={product.productName}
            product={product}
            onSelect={onSelect}
          />
        ))}
      </ul>
      <button
        type="button"
        className="product-carousel__arrow product-carousel__arrow--next"
        aria-label="Próximos produtos"
        onClick={() => scroll(1)}
      >
        ›
      </button>
    </div>
  )
}

export default ProductCarousel
