import { useEffect, useState } from 'react'
import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/formatPrice'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

const DESCRIPTION_PLACEHOLDER =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          aria-label="Fechar"
          onClick={onClose}
        >
          ×
        </button>

        <div className="modal__image">
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className="modal__content">
          <h2 id="modal-title">{product.productName}</h2>
          <p className="modal__price">{formatPrice(product.price)}</p>
          <p className="modal__description">{DESCRIPTION_PLACEHOLDER}</p>
          <a href="#" className="modal__details">
            Veja mais detalhes do produto &gt;
          </a>

          <div className="modal__buy">
            <div className="modal__quantity">
              <button
                type="button"
                aria-label="Diminuir quantidade"
                disabled={quantity === 1}
                onClick={() => setQuantity((value) => value - 1)}
              >
                −
              </button>
              <span>{String(quantity).padStart(2, '0')}</span>
              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={() => setQuantity((value) => value + 1)}
              >
                +
              </button>
            </div>
            <button type="button" className="modal__buy-button">
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
