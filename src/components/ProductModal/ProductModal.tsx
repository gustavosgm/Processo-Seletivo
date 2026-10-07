import { useEffect } from 'react'
import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/formatPrice'

interface ProductModalProps {
  product: Product
  onClose: () => void
}

function ProductModal({ product, onClose }: ProductModalProps) {
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
        <img src={product.photo} alt={product.productName} />
        <div className="modal__content">
          <h2 id="modal-title">{product.productName}</h2>
          <p>{product.descriptionShort}</p>
          <p className="modal__price">{formatPrice(product.price)}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
