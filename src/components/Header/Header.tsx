const NAV_ITEMS = [
  'TODAS CATEGORIAS',
  'SUPERMERCADO',
  'LIVROS',
  'MODA',
  'LANÇAMENTOS',
  'OFERTAS DO DIA',
]

function Header() {
  return (
    <header className="site-header">
      <ul className="site-header__benefits">
        <li>
          Compra <strong>100% segura</strong>
        </li>
        <li>
          <strong>Frete grátis</strong> acima de R$ 200
        </li>
        <li>
          <strong>Parcele</strong> suas compras
        </li>
      </ul>

      <div className="site-header__main">
        <a href="/" className="site-header__logo">
          <img src="/logo.png" alt="Econverse" />
        </a>

        <form className="site-header__search" role="search">
          <input
            type="search"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />
          <button type="submit" aria-label="Buscar">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>
        </form>

        <div className="site-header__actions">
          <button type="button" aria-label="Comparar">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M12 4v16M7 9l-2 2 2 2M17 9l2 2-2 2" />
            </svg>
          </button>
          <button type="button" aria-label="Favoritos">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
            </svg>
          </button>
          <button type="button" aria-label="Minha conta">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="10" r="3" />
              <path d="M6 18c1.5-2.5 3.5-3.5 6-3.5s4.5 1 6 3.5" />
            </svg>
          </button>
          <button type="button" aria-label="Carrinho">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h2l2.5 11h10L20 7H6" />
              <circle cx="9" cy="19" r="1.5" />
              <circle cx="17" cy="19" r="1.5" />
            </svg>
          </button>
        </div>
      </div>

      <nav className="site-header__nav" aria-label="Menu principal">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href="#"
                className={
                  item === 'OFERTAS DO DIA' ? 'site-header__nav-highlight' : undefined
                }
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="site-header__nav-subscription">
              ASSINATURA
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
