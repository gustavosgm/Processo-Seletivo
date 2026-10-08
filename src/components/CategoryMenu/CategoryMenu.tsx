import { useState } from 'react'

const CATEGORIES = [
  { name: 'Tecnologia', icon: '/tecnologia.png' },
  { name: 'Supermercado', icon: '/supermercado.png' },
  { name: 'Bebidas', icon: '/bebidas.png' },
  { name: 'Ferramentas', icon: '/ferramentas.png' },
  { name: 'Saúde', icon: '/saude.png' },
  { name: 'Esportes e Fitness', icon: '/esporte.png' },
  { name: 'Moda', icon: '/moda.png' },
]

function CategoryMenu() {
  const [active, setActive] = useState(CATEGORIES[0].name)

  return (
    <nav className="category-menu" aria-label="Departamentos">
      <ul>
        {CATEGORIES.map((category) => {
          const isActive = category.name === active

          return (
            <li key={category.name}>
              <button
                type="button"
                className={`category-menu__item${
                  isActive ? ' category-menu__item--active' : ''
                }`}
                aria-pressed={isActive}
                onClick={() => setActive(category.name)}
              >
                <span className="category-menu__icon">
                  <img src={category.icon} alt="" />
                </span>
                <span className="category-menu__label">{category.name}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default CategoryMenu
