import { useState } from 'react'

const CATEGORIES = [
  'Celular',
  'Acessórios',
  'Tablets',
  'Notebooks',
  'TVs',
  'Ver todos',
]

function CategoryTabs() {
  const [active, setActive] = useState(CATEGORIES[0])

  return (
    <nav className="category-tabs" aria-label="Categorias de produtos">
      {CATEGORIES.map((category) => {
        const isActive = category === active

        return (
          <button
            key={category}
            type="button"
            className={`category-tabs__tab${
              isActive ? ' category-tabs__tab--active' : ''
            }`}
            aria-pressed={isActive}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        )
      })}
    </nav>
  )
}

export default CategoryTabs
