const BRANDS = [
  { name: 'Econverse' },
  { name: 'Econverse' },
  { name: 'Econverse' },
  { name: 'Econverse' },
  { name: 'Econverse' },
]

function BrandSection() {
  return (
    <section className="brand-section">
      <header className="section-title">
        <h2>Navegue por marcas</h2>
      </header>

      <ul className="brand-section__list">
        {BRANDS.map((brand, index) => (
          <li key={index}>
            <a href="#produtos" className="brand-section__item">
              <img src="/logo.png" alt={brand.name} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BrandSection
